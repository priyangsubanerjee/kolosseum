import { GetMembersCount, GetTeamCount } from "@/prisma/team";

export async function GET() {
  let { success, message, count } = await GetMembersCount();
  return Response.json({
    success: success,
    message: message,
    count: count,
  });
}
