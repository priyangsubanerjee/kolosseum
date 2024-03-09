import { GeneralMessage } from "@/Templates/Registration";
import { sendMail } from "@/helper/sendMail";

export async function POST(request) {
  const data = await request.json();

  if (data.name.length > 0 && data.emails.length > 0 && data.pid.length > 0) {
    await sendMail(
      process.env.ZOHO_MAIL,
      process.env.ZOHO_PASS,
      data.emails,
      "Kodessphere Team Registration",
      GeneralMessage(data.name, data.pid)
    );
    return Response.json({
      success: true,
      message: "Success",
    });
  } else {
    return Response.json({
      success: false,
      message: "Invalid data",
    });
  }
}
