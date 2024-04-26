import { comparePassword } from "~/authentication/Bcrypt";
import LoginSchema from "~/schemas/LoginSchema";
import { useMongo } from "~/services/Mongo";

type LoginSubmission = {
  email: string;
  password: string;
};

export default defineEventHandler(async (event: any): Promise<void> => {
  const body = (await readBody(event)) as LoginSubmission;
  const { email, password } = body;

  try {
    await validateSubmission(body);

    const user = await authenticateUser({ email, password });

    setCookie(event, "token", user.token, {
      sameSite: true,
    });

    setCookie(
      event,
      "session",
      JSON.stringify({
        id: user._id,
        email: user.email,
        roles: user.roles,
      }),
      {
        sameSite: true,
      },
    );
  } catch (error: any) {
    throw error;
  }
});

async function validateSubmission(submission: LoginSubmission): Promise<void> {
  try {
    await LoginSchema.validate(submission);
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: error.message,
    });
  }
}

async function authenticateUser(submission: LoginSubmission): Promise<any> {
  const mongoClient = await useMongo();
  const usersCollection = mongoClient.collection("user-accounts");

  const user = await usersCollection.findOne({
    email: submission.email,
  });

  if (!user) {
    throw createError({
      statusCode: 422,
      statusMessage: "Unprocessable Content",
      message: "Invalid email or password",
    });
  }

  const passwordMatches = await comparePassword(submission.password, user.password);

  if (!passwordMatches) {
    throw createError({
      statusCode: 422,
      statusMessage: "Unprocessable Content",
      message: "Invalid email or password",
    });
  }

  return user;
}
