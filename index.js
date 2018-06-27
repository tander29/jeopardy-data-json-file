const http = require("http");
const request = require("request");
const fs = require("fs")
const fetch = require("node-fetch")
const logSpacing = "\n\n";
// const textBody = require("body");
// const jsonBody = require("body/json");

// const hostname = "127.0.0.1"
// const port = 3000;



let offSet = Math.floor(Math.random() * 1800)


// function getCategories() {
//     request(
//         `http://jservice.io/api/categories?count=100&offset=${offSet}`,
//         (error, response, jsonBody) => {
//             console.log(logSpacing);
//             console.log("REQUEST library way of making a GET request");
//             console.log("Status code:", response.statusCode);
//             console.log('random number', offSet)

//             const hydratedBody = JSON.parse(jsonBody);
//             console.log(hydratedBody);
//             fs.writeFileSync('testFile.txt', hydratedBody)
//         }
//     );
// }

// getCategories()

const fetchWithAsyncAWait = async url => {
    const response = await fetch(url);
    const hydratedBody = await response.json();

    console.log(logSpacing);
    console.log(
        "NODE-FETCH library way of making a GET request (using async/await)"
    );
    console.log("Status code:", response.status);
    console.log(hydratedBody);
    fs.writeFile('test.txt', JSON.stringify(hydratedBody), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("the file was saved");
    })
};

fetchWithAsyncAWait(`http://jservice.io/api/categories?count=100&offset=${offSet}`);