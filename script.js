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
    case "middlename": {
      const firstSpace = input.indexOf(" ");
      const lastSpace = input.lastIndexOf(" ");
      output = input.substring(firstSpace,lastSpace);
      break;
    }
    case "filecheck": {
      if( input.endsWith(".png") ) {
        output = "File is png";
      } else if( input.endsWith(".jpg") || input.endsWith(".jpeg")) {
        output = "File is jpg";
      } else {
        output = "File is something else ...";
      }
      break;
    }
    case "password": {
      output = "*".repeat( input.length );
      break;
    }
    case "3capitalize": {

      break;
    }
    case "hyphen": {
      let lastChar = " ";
      // Can't this be solved in a simpler way?
      output = Array.from(input).map( char => {
        let res = char;
        if( lastChar === " " || lastChar === "-" ) {
          res = char.toUpperCase();
        } 
        lastChar = char;
        return res;
        
      } ).join("");
      break;
    }
  }

  document.querySelector("#output").textContent = output;
}
