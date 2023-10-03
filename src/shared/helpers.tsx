import { format } from "date-fns";

export const formatDate = (
  dateString: string,
  formatString: string = "MMMM d, yyyy"
) => {
  const date = new Date(dateString);
  return format(date, formatString);
};
