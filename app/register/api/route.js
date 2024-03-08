import { GeneralMessage } from "@/Templates/Registration";
import { SaveToSheet } from "@/helper/saveToSheet";
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
    }
  }

  return Response.json({
    success: success,
    message: message,
    pid: pid,
  });
}

// try {
//   // If this is a "delete" event, delete the document in the other collection
//   if (changeEvent.operationType === "delete") {
//     await collection.deleteOne({ _id: docId });
//   }

//   // If this is an "insert" event, insert the document into the other collection
//   else if (changeEvent.operationType === "insert") {
//     await collection.insertOne(changeEvent.fullDocument);
//   }

//   // If this is an "update" or "replace" event, then replace the document in the other collection
//   else if (
//     changeEvent.operationType === "update" ||
//     changeEvent.operationType === "replace"
//   ) {
//     await collection.replaceOne({ _id: docId }, changeEvent.fullDocument);
//   }
// } catch (err) {
//   console.log("error performing mongodb write: ", err.message);
// }
