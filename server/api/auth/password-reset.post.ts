import { ObjectId } from "mongodb";
import { comparePassword, hashPassword } from "~/authentication/Bcrypt";
import PasswordResetSchema from "~/schemas/PasswordResetSchema";
import { useMongo } from "~/services/Mongo";

type PasswordResetSubmission = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default defineEventHandler(async (event: any): Promise<void> => {
  const cookies = parseCookies(event);

  const token = cookies["token"];

  if (!token) {
    throw createError({
      statusCode: 422,
      statusMessage: "Unprocessable Content",
      message: "Invalid token",
    });
  }

  const body = (await readBody(event)) as PasswordResetSubmission;
  const { currentPassword, newPassword } = body;

  try {
    await validateSubmission(body);

    const user = await authenticateUser({ token, currentPassword });

    const hashedPassword = await hashPassword(newPassword);

    await updatePassword(user._id, hashedPassword);
  } catch (error: any) {
    throw error;
  }
});

async function validateSubmission(submission: PasswordResetSubmission): Promise<void> {
  try {
    await PasswordResetSchema.validate(submission);
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: error.message,
    });
  }
}

async function authenticateUser(submission: { token: string; currentPassword: string }): Promise<any> {
  const mongoClient = await useMongo();
  const usersCollection = mongoClient.collection("user-accounts");

  const user = await usersCollection.findOne({
    token: submission.token,
  });

  if (!user) {
    throw createError({
      statusCode: 422,
      statusMessage: "Unprocessable Content",
      message: "Invalid token",
    });
  }

  const isPasswordValid = await comparePassword(submission.currentPassword, user.password);

  if (!isPasswordValid) {
    throw createError({
      statusCode: 422,
      statusMessage: "Unprocessable Content",
      message: "Invalid password",
    });
  }

  return user;
}
async function updatePassword(userId: string, password: string): Promise<void> {
  const mongoClient = await useMongo();
  const usersCollection = mongoClient.collection("user-accounts");

  await usersCollection.updateOne(
    {
      _id: new ObjectId(userId),
    },
    {
      $set: {
        password,
      },
    },
  );
}
