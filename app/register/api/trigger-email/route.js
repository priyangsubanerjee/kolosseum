import { GeneralMessage } from "@/Templates/Registration";
import { sendMail } from "@/helper/sendMail";

export async function POST(request) {
  const data = await request.json();
  console.log(data.name, data.emails, data.pid);
  await sendMail(
    process.env.ZOHO_MAIL,
    process.env.ZOHO_PASS,
    data.emails,
    "Konnexions Team Registration",
    GeneralMessage(data.name, data.pid)
  );
  return Response.json({
    success: true,
    message: "Success",
  });
}
