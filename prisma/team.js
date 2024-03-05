import prisma from "./prisma";

export const RegisterTeam = async (teamProp) => {
  try {
    await prisma.team.create({
      data: {
        name: teamProp.teamName,
        arena: teamProp.arena,
        pid: teamProp.pid,
        apiToken: teamProp.apiToken,
        partipantsCount: teamProp.totalParticipants,
        members: teamProp.members,
      },
    });
    return {
      success: true,
      message: "Team Registered Successfully",
      pid: teamProp.pid,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      pid: "",
    };
  }
};

export const CheckUniqueName = async (name) => {
  try {
    const team = await prisma.team.findMany({
      where: {
        name: name,
      },
    });
    if (team.length > 0) {
      return {
        success: false,
        message: "Team name already exists",
      };
    } else {
      return {
        success: true,
        message: "Team name is unique",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
