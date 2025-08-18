export function DateTimeFormatter(dateString) {
  try {
    const date = new Date(dateString)

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }

    const formatter = new Intl.DateTimeFormat("en-CA", options)

    return formatter.format(date)
  } catch (error) {
    console.error("Error formatting date:", error.message)
    return "Invalid Date"
  }
}