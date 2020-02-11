"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Started");
  document.querySelector("button#generate").addEventListener("click", generateOutput);
}

function generateOutput( event ) {
  console.log("generate output");
  event.preventDefault();

  const choice = document.querySelector("#choice").value;
  console.log(`Choice: ${choice}`);

  const input = document.querySelector("#input").value.trim();
  let output = "";

  switch( choice ) {
    case "capitalize":
      output = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
      break;
    case "firstname": {
      const firstSpace = input.indexOf(" ");
      output = input.substring(0, firstSpace);
      break;
    }
    case "firstlength": {
      const firstSpace = input.indexOf(" ");
      output = input.substring(0, firstSpace).length;
      break;
    }
    case "middlename":
      break;
    case "filecheck":
      break;
    case "password":
      break;
    case "3capitalize":
      break;
    case "hyphen":
      break;
  }

  document.querySelector("#output").textContent = output;
}
