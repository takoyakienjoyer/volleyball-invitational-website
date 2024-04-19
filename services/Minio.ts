import * as Minio from "minio";

let client: Minio.Client;

async function useMinio(): Promise<Minio.Client> {
  if (!client) {
    try {
      client = new Minio.Client({
        endPoint: process.env.MINIO_ENDPOINT as string,
        port: parseInt(process.env.MINIO_PORT as string),
        accessKey: process.env.MINIO_ACCESS_KEY as string,
        secretKey: process.env.MINIO_SECRET_KEY as string,
      });
    } catch (error: any) {
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
        message: "Could not connect to Minio",
      });
    }
  }

  return client;
}
