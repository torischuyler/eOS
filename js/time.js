/*
  ⏳ Time: Fetches and displays the visitor's local time and time zone.
*/

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  document.getElementById("time-details").textContent =
    `${timeString} in ${timeZone}`;
});
