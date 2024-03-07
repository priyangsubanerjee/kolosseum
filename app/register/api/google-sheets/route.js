//

import { SaveToSheet } from "@/helper/saveToSheet";

export async function POST(request) {
  let data = await request.json();

  let sheetData = {
    teamname: data.teamName,
    arena: data.arena,
    pid: "data.pid",
    totalParticipants: data.totalParicipants,
    m1name: data.member1.name,
    m1roll: data.member1.roll,
    m1email: data.member1.email,
    m1phone: data.member1.phone,
    m2name: data.member2.name,
    m2roll: data.member2.roll,
    m2email: data.member2.email,
    m2phone: data.member2.phone,
    m3name: data.member3?.name || "",
    m3roll: data.member3.roll || "",
    m3email: data.member3.email || "",
    m3phone: data.member3.phone || "",
  };

  await SaveToSheet(sheetData);

  return Response.json({
    success: true,
    message: "Team name is unique",
  });
}
