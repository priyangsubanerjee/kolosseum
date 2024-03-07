import { sendMail } from "@/helper/sendMail";
import { RegisterTeam } from "@/prisma/team";
import random from "random-string-generator";

export async function POST(request) {
  let data = await request.json();
  let teamname = data.teamName;
  let arena = data.arena;
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
  };

  let { success, message, pid } = await RegisterTeam(ticketProp);
  let emails = [];
  members.forEach((member) => {
    emails.push(member.email);
  });

  if (success) {
    let sheetData = {
      teamname: data.teamName,
      arena: data.arena,
      pid: pid,
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

    if (process.env.NODE_ENV === "production") {
      await sendMail(
        process.env.ZOHO_MAIL,
        process.env.ZOHO_PASS,
        emails,
        `Registration Confirmed - ${ticketProp.teamName}`,
        ` <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>Registration Confirmed - Team [Your Team Name]</title>
          </head>
          <body>
            <style>
              @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
              body {
                font-family: "Inter", sans-serif;
                font-size: 1rem;
                line-height: 1.7;
                color: #333;
              }
            </style>
            <p>Dear participant,</p>
            <p style="margin-top: 40px">
              This email confirms the successful registration of team
              <strong>${teamname}</strong> (Team ID: ${pid}) for the
              <strong>Kolosseum</strong> taking place on
              <strong>17th March, 2024</strong>.
            </p>
            <p style="margin-top: 80px">
              We are pleased to have you participate and look forward to a successful
              event. Please keep this Team ID (${pid}) for any further communication
              regarding the event.
            </p>
            <p style="margin-top: 80px">
              <strong>In the meantime, feel free to:</strong>
            </p>
            <ul>
              <li>Follow our <a href="">Instagram page</a></li>
              <li>Follow our <a href="">LinkedIn page</a></li>
            </ul>
            <p style="margin-top: 70px">
              We will be in touch soon with any additional information.
            </p>
            <p style="margin-top: 100px">Thank you,</p>
            <p>Team Konnexions</p>
          </body>
        </html>
        
        
              `
      );
    }
  }

  return Response.json({
    success: success,
    message: message,
    pid: pid,
  });
}
