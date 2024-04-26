import { useMongo } from "~/services/Mongo";

export default defineEventHandler(async (event): Promise<any> => {
  const db = await useMongo();
  const websiteData = db.collection("website-data");
  const websiteStatistics = await websiteData.findOne({ key: "website-statistics" });
  const websiteVisits = Number(websiteStatistics?.visitorCount);

  const cookies = parseCookies(event);
  if (!cookies["has-visited"]) {
    setCookie(event, "has-visited", "true", {
      sameSite: true,
    });

    await websiteData.updateOne({ key: "website-statistics" }, { $set: { visitorCount: websiteVisits + 1 } });
    return websiteVisits + 1;
  }

  return websiteVisits;
});
