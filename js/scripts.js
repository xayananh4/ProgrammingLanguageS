//  function to clear out previos results from screen
function clearPreviousResults() {
  python.setAttribute("class", "defaultSettingHidden");
  javascript.setAttribute("class", "defaultSettingHidden");
  cplus.setAttribute("class", "defaultSettingHidden");
}

function handleSubmission() {
  let input1Value = parseInt(document.getElementById('input1').value);
  let input2Value = parseInt(document.getElementById('input2').value);
  let input3Value = parseInt(document.getElementById('input3').value);
  let input4Value = parseInt(document.getElementById('input4').value);
  let input5Value = parseInt(document.getElementById('input5').value);
  const firstNameInput = document.getElementById("fNameInput").value;
  const recommendation = document.querySelector("span#fNameInput").innerText = firstNameInput;

  let totalValue = input1Value + input2Value + input3Value + input4Value
    + input5Value;

  if (totalValue < 25) {
    python.removeAttribute("class");
    recommendation;
  }
  else if (totalValue <= 49 && totalValue >= 25) {
    javascript.removeAttribute("class");
    recommendation;
  }
  else if (totalValue > 49) {
    cplus.removeAttribute("class");
    recommendation;
  }
  else {
    document.getElementById("error-message").innerHTML = "Please Enter Some Values!";
  }
}

// lod event listener 
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let python = document.querySelector("div#python");
  let javascript = document.querySelector("div#javascript");
  let cplus = document.querySelector("div#cplus");
  let resetBtn = document.querySelector("button#reset");

  form.addEventListener("submit", function (event) {
    clearPreviousResults();
    handleSubmission();
    event.preventDefault();
  });

  // New event listener for after form submit event the reset button is shown
  form.addEventListener("submit", function () {
    resetBtn.removeAttribute("class");
  });

  // Event listener to reset values in the text box when user clicks reset button
  resetBtn.addEventListener("click", function () {
    clearPreviousResults();

    document.getElementById("input1").value = null;
    document.getElementById("input2").value = null;
    document.getElementById("input3").value = null;
    document.getElementById("input4").value = null;
    document.getElementById("input5").value = null;
  });
});