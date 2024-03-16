import prisma from "./prisma";

export const RegisterTeam = async (teamProp) => {
  try {
    await prisma.team.create({
      data: {
        name: teamProp.teamName.trim(),
        arena: teamProp.arena,
        pid: teamProp.pid,
        apiToken: teamProp.apiToken,
        partipantsCount: teamProp.totalParticipants,
        members: teamProp.members,
        gmail: teamProp.gmail,
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
    return {
      success: false,
      message: error.message,
      team: {},
    };
  }
};

export const GetTeamCount = async () => {
  try {
    const count = await prisma.team.findMany();
    return {
      success: true,
      message: "Team count found",
      count: count.length,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      count: 0,
    };
  }
};

export const GetMembersCount = async () => {
  let twoMembers = await prisma.team.findMany({
    where: {
      partipantsCount: 2,
    },
  });
  let threeMembers = await prisma.team.findMany({
    where: {
      partipantsCount: 3,
    },
  });

  let total = twoMembers.length * 2 + threeMembers.length * 3;

  return {
    success: true,
    message: "Members count found",
    count: total,
  };
};

export const GetTeamList = async () => {
  try {
    const teams = await prisma.team.findMany({
      select: {
        name: true,
        pid: true,
        partipantsCount: true,
        members: true,
      },
    });
    return {
      success: true,
      message: "Teams found",
      teams: teams,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      teams: [],
    };
  }
};
