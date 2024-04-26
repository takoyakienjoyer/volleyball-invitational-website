import { useMongo } from "~/services/Mongo";

export default defineEventHandler(async (event): Promise<any> => {
  const db = await useMongo();
  const collection = db.collection("all-tournament");

  const players = await collection.find().toArray();

  players.sort((a, b) => {
    if (a.mvp && !b.mvp) return -1;
    if (!a.mvp && b.mvp) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  if (players.length && players[0].mvp) {
    players[0].class = "bg-blue-500/25 dark:bg-blue-400/25";
  }

  return players;
});
