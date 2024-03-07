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

export const GetVirtualCard = async (id) => {
  try {
    const team = await prisma.team.findUnique({
      where: {
        pid: id,
      },
    });
    if (!team) {
      return {
        success: false,
        message: "Team not found",
        card: {},
      };
    }
    let membersName = team.members.map((member) => member.name);
    return {
      success: true,
      message: "Team found",
      team: {
        name: team.name,
        pid: team.pid,
        partipantsCount: team.partipantsCount,
        members: team.members.map((member) => member.name),
      },
    };
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: error.message,
      team: {},
    };
  }
};

export const GetTeamCount = async () => {
  try {
    const count = await prisma.team.count();
    return {
      success: true,
      message: "Team count found",
      count: count,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      count: 0,
    };
  }
};
