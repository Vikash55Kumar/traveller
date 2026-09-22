export function generateIcsFile(): void {
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Traveller//Experience//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:traveller-morning-2026@thetraveller",
    "SUMMARY:The Traveller — Morning Experience",
    "DESCRIPTION:The trail begins before the sun rises. Reporting sharp at 5:00 AM at Kailana Circle, Kabir Nagar, Jodhpur, Rajasthan 342008. Bring notebook, pen, water, and trekking footwear. Everything else is meant to be discovered.",
    "LOCATION:Kailana Circle, Kabir Nagar, Jodhpur, Rajasthan 342008",
    "DTSTART:20260927T050000",
    "DTEND:20260927T090000",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "the-traveller-morning.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent("The Traveller — Morning Experience");
  const details = encodeURIComponent(
    "The trail begins before the sun rises. Reporting sharp at 5:00 AM at Kailana Circle, Kabir Nagar, Jodhpur, Rajasthan 342008. Bring notebook, pen, water, and trekking footwear. Everything else is meant to be discovered."
  );
  const location = encodeURIComponent("Kailana Circle, Kabir Nagar, Jodhpur, Rajasthan 342008");
  // UTC or local formatted for GCal: 20260927T050000/20260927T090000
  const dates = "20260927T050000/20260927T090000";
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
