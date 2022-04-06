export default function formatDate({
  date,
  options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  format = "es-ES",
}) {
  return new Date(date).toLocaleDateString(format, options);
}
