import axios from "axios";
import { notifications } from "@mantine/notifications";

const instance = axios.create({
  baseURL: "https://tickera-backendd.onrender.com",
});

export const createAttendees = async (values) => {
  try {
    const res = await instance.post("/attendees/createAttendees", values);
    return notifications.show({
      title: res?.data?.message,
      message: "Hey there, your code is awesome! 🤥",
    });
  } catch (error) {
    return notifications.show({
      color: "red",
      title: error?.response?.data?.message,
      message: "Hey there, your code is awesome! 🤥",
    });
  }
};
