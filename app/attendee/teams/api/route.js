import { GetVirtualCard } from "@/prisma/team";

export async function POST(request) {
  let { id } = await request.json();
  let { success, message, team } = await GetVirtualCard(id);

  return Response.json({
    success: success,
    message: message,
    team: team,
  });
}
