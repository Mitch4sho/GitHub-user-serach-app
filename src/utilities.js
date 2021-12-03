export function getDate(date) {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = new Date(date).getFullYear();
  const month = MONTHS[new Date(date).getMonth()];
  const day = new Date(date).getDate();
  return { year, month, day };
}

export default function formatUserJoinDate(date) {
  const { year, month, day } = getDate(date);
  return `Joined ${day} ${month} ${year}`;
}

export function formatBlogLink(blog) {
  return blog ? blog.split("//")[1] : "Not Available";
}
