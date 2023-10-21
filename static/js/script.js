const lines = [
  "¡Bienvenido a mi sitio web!",
  "Soy Elkin Jaramillo.",
  " ¡Encantado de conocerte!",
  "Desarrollador de Backend y Data Engineer."
];

let lineIndex = 0;
let textIndex = 0;
let textElement = document.createElement("p");
let additionalText = document.querySelector(".additional-text");

additionalText.appendChild(textElement);

function addText(text) {
  if (text === " ") {
    textElement.innerHTML += "&nbsp;";
  } else {
    textElement.innerText += text;
  }
}

function clearTextAndAnimateNextLine() {
  setTimeout(() => {
    textIndex = 0;
    textElement.innerText = "";
    lineIndex++;
    if (lineIndex < lines.length) {
      textElement = document.createElement("p");
      additionalText.appendChild(textElement);
      showLines();
    } else {
      lineIndex = 0;
      showLines();
    }
  }, 2000);
}

function showLines() {
  if (lineIndex < lines.length) {
    const line = lines[lineIndex];
    if (textIndex < line.length) {
      addText(line[textIndex]);
      textIndex++;
      setTimeout(showLines, 100);
    } else {
      clearTextAndAnimateNextLine();
    }
  }
}

showLines();
