export const NotifyTeam = async (message) => {
  await fetch("/message/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
};
