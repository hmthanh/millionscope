import { parseISO, format } from "date-fns";

export const formatDate = (date: string): string => {
  if (date) {
    return format(parseISO(date), "MMMM dd, yyyy");
  } else {
    return ''
  }
};
