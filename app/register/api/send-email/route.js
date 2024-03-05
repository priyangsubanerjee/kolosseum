export async function POST() {
  await sendMail(
    process.env.ZOHO_MAIL,
    process.env.ZOHO_PASS,
    ["22052490@kiit.ac.in"],
    "Team Registered Successfully",
    `Your team has been registered successfully for the event. Your team id is. Please use this id for further communication.`
  );
  return Response.json({
    success: true,
    message: "Team Registered Successfully",
  });
}
