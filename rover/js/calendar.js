let newDoc = document.implementation.createHTMLDocument("Event Schedule");

let table = newDoc.createElement("table");
table.classList.add("event-table");
newDoc.body.appendChild(table);

let dayElements = document.querySelectorAll(".day");

dayElements.forEach(function (dayElement) {
  let dateLabel = dayElement.querySelector(".date-label").textContent.trim();

  let row = table.insertRow();
  row.classList.add("day-row");
  let cell = row.insertCell();
  let cell1 = row.insertCell();
  cell.classList.add("day-cell");
  cell1.classList.add("day-cell");
  cell.textContent = "Day: " + dateLabel;

  let eventElements = dayElement.querySelectorAll(".event");

  eventElements.forEach(function (eventElement) {
    let eventTimeLA = eventElement
      .querySelector(".event-time")
      .textContent.trim();
    let [hour, minute, ampm] = eventTimeLA
      .match(/(\d+):(\d+)([APMapm]{2})/)
      .slice(1);

    let hourUA =
      ampm.toUpperCase() === "PM" && hour !== "12"
        ? parseInt(hour) + 12
        : parseInt(hour);
    let minuteUA = parseInt(minute);

    if (hourUA >= 24) {
      hourUA -= 24;
    }

    let eventTimeUA = `${hourUA.toString().padStart(2, "0")}:${minuteUA
      .toString()
      .padStart(2, "0")}`;
    let eventTitle = eventElement
      .querySelector(".event-title")
      .textContent.trim();

    let row = table.insertRow();
    row.classList.add("event-row");
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    cell1.classList.add("time-cell");
    cell2.classList.add("event-cell");
    cell1.textContent = "Time (UA): " + eventTimeUA;
    cell2.textContent = "Event: " + eventTitle;

    // Extract event description
    let eventDescriptionElement =
      eventElement.querySelector(".event-description");
    if (eventDescriptionElement) {
      let slackLink = eventDescriptionElement.querySelector("a");
      if (slackLink) {
        let slackHref = slackLink.getAttribute("href");
        let detailItem = newDoc.createElement("div");
        detailItem.classList.add("detail-item");
        let detailsLabel = newDoc.createElement("span");
        detailsLabel.classList.add("event-details-label");
        detailsLabel.textContent = "Описание";
        let eventDescription = newDoc.createElement("span");
        eventDescription.classList.add("event-description");
        eventDescription.textContent = slackHref;
        detailItem.appendChild(detailsLabel);
        detailItem.appendChild(eventDescription);
        cell2.appendChild(detailItem);
      }
    }
  });

  let separatorRow = table.insertRow();
  separatorRow.classList.add("separator-row");
});

document.body.appendChild(newDoc.documentElement);
