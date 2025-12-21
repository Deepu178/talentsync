import blogsData from "../data/blogsData";

export default function getLocalizedDate(date: Date) {
  return new Date(date).toLocaleDateString(blogsData.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
