//your JS code here. If required.
 // function waitAndResolve() {
 //            return new Promise((resolve, reject) => {
 //                setTimeout(() => {
 //                    resolve("Hello, world!");
 //                }, 1000);
 //            });
 //        }

 //        function updateText() {
 //            const outputElement = document.getElementById("output");
 //            outputElement.textContent = "Loading...";

        //     waitAndResolve()
        //         .then((result) => {
        //             outputElement.textContent = result;
        //         })
        //         .catch((error) => {
        //             outputElement.textContent = "Error occurred.";
        //             console.error(error);
        //         });
        // 


// script.js

function waitAndResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

function updateText() {
  const outputElement = document.getElementById("output");
  outputElement.textContent = "Loading...";

  waitAndResolve()
    .then((result) => {
      outputElement.textContent = result;
    })
    .catch((error) => {
      outputElement.textContent = "Error occurred.";
      console.error(error);
    });
}

updateText(); // Call the function to update the text on page load

