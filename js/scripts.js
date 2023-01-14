//  function to clear out previos results from screen
 function clearPreviousResults() {
    python.setAttribute("class", "defaultSettingHidden");
    javascript.setAttribute("class", "defaultSettingHidden");
    cplus.setAttribute("class", "defaultSettingHidden");
  }

function handleSubmission() { 
  let selectionFromInput01 = parseInt(document.getElementById('input1').value);
  let selectionFromInput02 = parseInt(document.getElementById('input2').value);
  let selectionFromInput03 = parseInt(document.getElementById('input3').value);
  let selectionFromInput04 = parseInt(document.getElementById('input4').value);
  let selectionFromInput05 = parseInt(document.getElementById('input5').value);
  let totalValueFromAllInputs = selectionFromInput01 + selectionFromInput02 + 
                        selectionFromInput03 + selectionFromInput04 + 
                        selectionFromInput05;
  if(totalValueFromAllInputs < 25)
  {
    python.removeAttribute("class");   
  }
  else if(totalValueFromAllInputs <= 49 && totalValueFromAllInputs >= 25){
    javascript.removeAttribute("class");  
  }
  else if(totalValueFromAllInputs > 49){
    cplus.removeAttribute("class");  
  }
  else {    
      document.getElementById("error-message").innerHTML = "Please Enter Some Values!";
  }
}

window.addEventListener("load", function() {  
  let form = document.querySelector("form");
  let python  = document.querySelector("div#python");
  let javascript  = document.querySelector("div#javascript");
  let cplus = document.querySelector("div#cplus");
  let resetBtn = document.querySelector("button#reset");
  
  form.addEventListener("submit", function(event) {
    clearPreviousResults();
    handleSubmission();
    event.preventDefault();
  });

    // New event listener for after form submit event the reset button is shown
  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  }); 

   // Event listener to reset values in the text box when user clicks on reset button
  resetBtn.addEventListener("click", function() {
    python.setAttribute("class", "defaultSettingHidden");
    javascript.setAttribute("class", "defaultSettingHidden");
    cplus.setAttribute("class", "defaultSettingHidden");
    document.getElementById("input1").value = null;
    document.getElementById("input2").value = null;
    document.getElementById("input3").value = null;
    document.getElementById("input4").value = null;
    document.getElementById("input5").value = null;
  });
});