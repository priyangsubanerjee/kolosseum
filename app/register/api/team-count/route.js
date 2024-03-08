import { GetTeamCount } from "@/prisma/team";

export async function GET() {
  let { success, message, count } = await GetTeamCount();
  return Response.json({
    success: success,
    message: message,
    count: count + 8,
  });
}
