// User Interface Logic


function handleSubmission(event) {
  event.preventDefault();
  let python  = document.querySelector("div#python");
  let javascript  = document.querySelector("div#javascript");
  let cplus = document.querySelector("div#cplus");
  
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
      document.getElementById("error").innerHTML = "Please enter in values!";
  }
    

 
}





window.addEventListener("load", function() {
  const form = document.getElementById("surveyform");
  form.addEventListener("submit", handleSubmission);
 
});