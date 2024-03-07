import axios from "axios";

export const SaveToSheet = async (data) => {
  try {
    await axios.post(
      "https://script.google.com/macros/s/AKfycbwpeY7Zj6qdHGmcBUI5G6hoZDUmo_9A_Klh_eMyMe0fsfRmwAStOAHfFHPgr1dOoB0k/exec",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      success: true,
      message: "Data saved to sheet",
    };
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: error.message,
    };
  }
};
