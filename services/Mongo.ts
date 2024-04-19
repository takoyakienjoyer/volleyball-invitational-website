import { Db, MongoClient } from "mongodb";

let client: MongoClient;

async function useMongo(): Promise<Db> {
  if (!client) {
    try {
      client = await MongoClient.connect(process.env.MONGO_URI as string);
    } catch (error: any) {
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
        message: "Could not connect to MongoDB",
      });
    }
  }

  return client.db("volleyball-invitational-website");
}

export { useMongo };
