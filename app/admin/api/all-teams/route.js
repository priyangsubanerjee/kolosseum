import { GetTeamList } from "@/prisma/team";

export async function GET(request) {
  let { teams, success } = await GetTeamList();
  return Response.json({
    success: false,
    message: "Registrations are closed.",
    teams: teams,
  });
}
