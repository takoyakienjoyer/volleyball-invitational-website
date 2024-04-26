import AllTournamentSchema from "~/schemas/AllTournamentSchema";
import { useMongo } from "~/services/Mongo";

type AllTournamentSubmission = {
  method: string;
  player: {
    mvp: boolean;
    number: string;
    name: string;
    school: string;
    position: string;
  };
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

  const body = (await readBody(event)) as AllTournamentSubmission;

  try {
    await validateUser(token);

    await validateSubmission(body);
    if (body.method === "INSERT") {
      await saveSubmission(body);
    } else if (body.method === "DELETE") {
      await deleteSubmission(body);
    } else {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Invalid method",
      });
    }
  } catch (error: any) {
    throw error;
  }
});

async function validateUser(token: string): Promise<void> {
  const mongoClient = await useMongo();
  const usersCollection = mongoClient.collection("user-accounts");

  const user = await usersCollection.findOne({
    token,
  });

  if (!user) {
    throw createError({
      statusCode: 422,
      statusMessage: "Unprocessable Content",
      message: "Invalid token",
    });
  }

  if (!user.roles.includes("admin")) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden",
      message: "You do not have permission to access this resource",
    });
  }
}

async function validateSubmission(submission: AllTournamentSubmission): Promise<void> {
  try {
    await AllTournamentSchema.validate(submission.player);
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: error.message,
    });
  }
}

async function saveSubmission(submission: AllTournamentSubmission): Promise<void> {
  const mongoClient = await useMongo();
  const allTournamentCollection = mongoClient.collection("all-tournament");

  await allTournamentCollection.insertOne(submission.player);
}

async function deleteSubmission(submission: AllTournamentSubmission): Promise<void> {
  const mongoClient = await useMongo();
  const allTournamentCollection = mongoClient.collection("all-tournament");

  const player = await allTournamentCollection.findOne(submission.player);

  if (!player) {
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
      message: "Player not found",
    });
  }

  if (
    player.mvp !== submission.player.mvp ||
    player.number !== submission.player.number ||
    player.name !== submission.player.name ||
    player.school !== submission.player.school ||
    player.position !== submission.player.position
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Player fields do not match",
    });
  }

  allTournamentCollection.deleteOne(player);
}
