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
      `Registration Confirmed - ${teamname}``
        <!DOCTYPE html>
        <html lang="en">
            <body>
            <p>Dear prticipant,</p>
            <p>This email confirms the successful registration of team <strong>${teamname}</strong> (Team ID: ${pid}) for the <strong>Kolesseum</strong> taking place on <strong>17th march, 2024.</strong>.</p> <br/><br/>
            <p>We are pleased to have you participate and look forward to a successful event. Please keep this Team ID (Team ID: ${pid}) for any further communication regarding the event.</p> <br/><br/>
            <p>We will be in touch soon with any additional information.</p>
            <p>Thank you,</p>
            <p>[Your Name/Team Representative Name]</p>
            </body>
        </html>

      `
    );
  }

  return Response.json({
    success: success,
    message: message,
    pid: pid,
  });
}
