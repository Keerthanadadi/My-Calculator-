var displayArea = document.getElementById("display");

function isOperator(buttonText) {
  if (
    buttonText == "+" ||
    buttonText == "-" ||
    buttonText == "*" ||
    buttonText == "/" ||
    buttonText == "%"
  )
    return true;
  else return false;
}

function buttonClicked(buttonText) {
  if (displayArea.innerText.length >= 24) return;

  if (buttonText === "CLR") {
    displayArea.innerText = "0";
    return;
  }

  if (buttonText === "DEL") {
    displayArea.innerText = displayArea.innerText.slice(0, -1);
    return;
  }

  if (buttonText === "=") {
    try {
      displayArea.innerText = eval(displayArea.innerText);
    } catch (error) {
      displayArea.innerText = 0;
    }
    return;
  }

  if (displayArea.innerText === "0") {
    if (buttonText == "0" || buttonText == "00") return;

    if (buttonText == "." || isOperator(buttonText)) {
      displayArea.innerText = "0" + buttonText;
      return;
    }

    displayArea.innerText = buttonText;
  } else {
    if (
      isOperator(displayArea.innerText[displayArea.innerText.length - 1]) &&
      isOperator(buttonText)
    ) {
      displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText;
      return;
    }

    displayArea.innerText = displayArea.innerText + buttonText;
  }
}