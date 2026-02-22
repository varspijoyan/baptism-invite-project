import api from "./api";

interface AcceptInviteRequestData {
  name: string;
  surname: string;
  isAccepted: boolean;
  guestsAmount: string;
}

export const sendInviteResponse = async (data: AcceptInviteRequestData) => {
  try {
    const response = await api.post("/send", data);
    return response.data;
  } catch (error) {
    console.error("Error sending invite response:", error);
    throw error;
  }
};
