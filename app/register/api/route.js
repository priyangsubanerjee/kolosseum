import { GeneralMessage } from "@/Templates/Registration";
import { NotifyTeam } from "@/helper/notify";
import { SaveToSheet } from "@/helper/saveToSheet";
import { sendMail } from "@/helper/sendMail";
import { RegisterTeam } from "@/prisma/team";
import random from "random-string-generator";
import { getServerSession } from "next-auth/next";

export async function POST(request) {
  let session = await getServerSession({ req: request });
  return Response.json({
    success: false,
    message: "Registrations are closed.",
  });
  if (session) {
    let data = await request.json();
    let teamname = data.teamName;
    let arena = data.arena;
    let gmail = data.gmail;
    let totalParticipants = data.totalParticipants;
    let members = [];
    if (data.member1.name != "") {
      members.push(data.member1);
    }
    if (data.member2.name != "") {
      members.push(data.member2);
    }
    if (data.member3.name != "") {
      members.push(data.member3);
    }

    let ticketProp = {
      teamName: teamname,
      arena: arena,
      pid: random(7),
      apiToken: random(32),
      totalParticipants: totalParticipants,
      members: members,
      gmail: gmail,
    };

    let { success, message, pid } = await RegisterTeam(ticketProp);

    console.error("Success: ", success, "Message: ", message);

    return Response.json({
      success: success,
      message: message,
      pid: pid,
    });
  } else {
    return Response.json({
      success: false,
      message: "Unauthorized",
    });
  }
}
