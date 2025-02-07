import { formatDuration, intervalToDuration } from "date-fns";

const formatShort = {
  xSeconds: "{{count}}s",
  xMinutes: "{{count}}min",
  xHours: "{{count}}h",
  xDays: "{{count}}d"
};

export const prettyDuration = (seconds: number) => formatDuration(
  intervalToDuration({ start: 0, end: Math.round((seconds || 0) * 1000 / 60000) * 60000 }),
  {
    locale: {
      // Let's just hope the token is one of these options
      formatDistance: (token: "xSeconds" | "xMinutes" | "xHours" | "xDays", count: number) => {
        if (!(token in formatShort)) {
          console.warn("Unimplemented token", token);
          return "";
        }

        return formatShort[token].replace("{{count}}", String(count));
      }
    }
  }) || "None";

export type DayRange = "month" | "week" | "all";

export const getDayCount = (dayRange: Omit<DayRange, "all">) => {
  switch (dayRange) {
    case "month":
      return 30;
    case "week":
      return 7;
    default:
      throw new Error("Invalid day range");
  }
};
