import { Event } from "@/types";
import fnsFormat from "date-fns/format";

export const isDev = process.env.NODE_ENV === "development";

export const formatDate = (date: string) =>
  fnsFormat(new Date(date), "iiii, dd LLLL uuuu");

export const formatDatetime = (datetime: string) =>
  fnsFormat(new Date(datetime), "iiii, dd LLLL uuuu, HH:mm 'GMT+7'");

export const isLastEventFinished = (event: Event) => {
  const sessions = event.sessionsCollection.items;
  return new Date() > new Date(sessions[sessions.length - 1].endDatetime);
};
