import { CheckUniqueName } from "@/prisma/team";

export async function POST(request) {
  let { name } = await request.json();
  let { success, message } = await CheckUniqueName(name);

  return Response.json({
    success: success,
    message: message,
  });
}
