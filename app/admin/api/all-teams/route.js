import { GetTeamList } from "@/prisma/team";

export async function GET(request) {
  let teams = await GetTeamList();
  return Response.json({
    success: false,
    message: "Registrations are closed.",
    teams: teams,
  });
}
