const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",
    destination: "MOSCOW",
    flight: "OX 283",
    gate: "A 01",
    remarks: "ON TIME",
  },
  {
    time: "13:22",
    destination: "MADRID",
    flight: "RO 282",
    gate: "B 01",
    remarks: "CANCELLED",
  },
  {
    time: "14:45",
    destination: "SAO PAULO",
    flight: "CX 728",
    gate: "C 03",
    remarks: "CANCELLED",
  },
  {
    time: "02:11",
    destination: "BOGOTA",
    flight: "CU 667",
    gate: "D 24",
    remarks: "ON TIME",
  },
  {
    time: "15:00",
    destination: "BS AS",
    flight: "FX 888",
    gate: "A 55",
    remarks: "DELAYED",
  },
];

const destinations = ["BS AS", "BOGOTA", "SAO PAULO", "MADRID", "MOSCOW"];
const remarks = ["ON TIME", "CANCELLED", "DELAYED"];
let hour = 15;

function makeTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    for (const flightDetail in flight) {
      const tableDetail = document.createElement("td");
      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");

        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableDetail.append(letterElement);
        }, 100 * index);
      }

      tableRow.append(tableDetail);
    }

    tableBody.append(tableRow);
  }
}

makeTable();

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
  const numbers = "0123456789";
  if (maxNumber) {
    const newNumber = numbers.slice(0, maxNumber + 1);
    return newNumber.charAt(Math.floor(Math.random() * newNumber.length));
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime() {
    let displayHour = hour

    if (hour < 24) {
        hour++ 
    }

    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }

    if (hour < 10) {
        displayHour = "0" + hour
    }

    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight:
      generateRandomLetter() +
      generateRandomLetter() +
      "  " +
      generateRandomNumber() +
      generateRandomNumber,
    gate:
      generateRandomLetter() +
      " " +
      generateRandomNumber() +
      generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });

  tableBody.textContent = ""
  makeTable()
}

setInterval(shuffleUp, 5000)
