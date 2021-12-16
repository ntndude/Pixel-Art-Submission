// Select color input
let colorChoice = document.querySelector("#colorPicker");

// create HTML for table
var buildHTML = document.getElementById("pixelCanvas");

// Select size input
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
const clickTab = document.querySelector('#subpress');

// listen for clicks on table
const table = document.getElementById("pixelCanvas");

function clickPixel() {
    var count = 0;
    table.addEventListener("click", function(event) {
        let pixClick = event.target;
        pixClick.style.backgroundColor = colorChoice.value
    });
}

function makeGrid(colHeight, rowWidth) {
    var htmlString = "";
    buildHTML.innerHTML = "";
    var rowWidth = width.value;
    var colHeight = height.value;
    var temp_string = "";
    htmlString = "<table>";
    for (col = 0; col < colHeight; col++) {
        htmlString = htmlString + "<tr>";
        const tabRow = document.createElement('tr');
        for (row = 0; row < rowWidth; row++) {
            const tabData = document.createElement('td');
            htmlString = htmlString + "<td></td>";
        }
        htmlString = htmlString + "</tr>";
    }
    htmlString = htmlString + "</table>";
    buildHTML.insertAdjacentHTML('afterbegin', htmlString);
    clickPixel();
}
clickTab.addEventListener("click", function() {
    event.preventDefault();
    makeGrid(height.value, width.value);
});