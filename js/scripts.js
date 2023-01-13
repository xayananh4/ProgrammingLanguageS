// User Interface Logic


function handleSubmission(event) {
  event.preventDefault();
  let result = ""; 
  let python  = document.querySelector("div#python");
  let javascript  = document.querySelector("div#javascript");
  let assembly = document.querySelector("div#assembly");
  let selectionFormQuestionOne = document.querySelector("input[name='q01']:checked").value;

  

  
  if('zeroToOne' === selectionFormQuestionOne)
  {
    assembly.removeAttribute("class");   
  }
    

  else if('neutral' === selected)
    result = "Work neutral here!";
  else
    result = "It's Great!";

  document.getElementById("output").innerHTML = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("surveyform");
  form.addEventListener("submit", handleSubmission);
 
});