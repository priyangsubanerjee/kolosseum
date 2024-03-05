import { sendMail } from "@/helper/sendMail";
import { RegisterTeam } from "@/prisma/team";
import random from "random-string-generator";

export async function POST(request) {
  let data = await request.json();
  let teamname = data.teamName;
  let arena = data.arena;
  let totalParticipants = data.totalParicipants;
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
  };

  let { success, message, pid } = await RegisterTeam(ticketProp);
  let emails = [];
  members.forEach((member) => {
    emails.push(member.email);
  });

  if (success) {
    await sendMail(
      process.env.ZOHO_MAIL,
      process.env.ZOHO_PASS,
      emails,
      "Team Registered Successfully",
      `Your team has been registered successfully for the event. Your team id is ${pid}. Please use this id for further communication.`
    );
  }

  return Response.json({
    success: success,
    message: message,
    pid: pid,
  });
}
