import { CheckUniqueName } from "@/prisma/team";
import { getServerSession } from "next-auth/next";

export async function POST(request) {
  let session = await getServerSession({ req: request });
  if (session) {
    let { name } = await request.json();
    let { success, message } = await CheckUniqueName(name);

    return Response.json({
      success: success,
      message: message,
    });
  } else {
    return Response.json({
      success: false,
      message: "Unauthorized",
    });
  }
}
