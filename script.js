const username = document.getElementById("usernameLink");
const nameInput = document.getElementById("name");
const imgInput = document.getElementById("img")
const profile = document.getElementById("profile");
const newdiv =  document.getElementsByClassName("container")[0];

function setName(){
    username.textContent = nameInput.value + "'s phone book";
    nameInput.value = "";
}
function setimg(){
    const imgUrl = imgInput.value;
    profile.style.backgroundImage = `url("${imgUrl}")`;
    console.log(input.value);
    imgInput.value = "";
}

let rowCount = 0;
let phonenumber = [];

function addParagraph() {
    const name = document.getElementById("name_Tal").value;
    const tel = document.getElementById("tal").value;
    if (name && tel) {
        rowCount++;
        const tableBody = document.getElementById("tableBody");
        const newRow = document.createElement("tr");

        const orderCell = document.createElement("td");
        orderCell.textContent = rowCount;
        newRow.appendChild(orderCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = name;
        newRow.appendChild(nameCell);

        const telCell = document.createElement("td");
        telCell.textContent = tel;
        newRow.appendChild(telCell);

        tableBody.appendChild(newRow);
        
        phonenumber.push([rowCount, name, tel]);

        document.getElementById("name_Tal").value = "";
        document.getElementById("tal").value = "";
    } else {
        alert("Please enter both Name and Tel.");
    }
}

function saveCSV() {
    if (phonenumber.length === 0) {
        alert("No data to save.");
        return;
    }
    const csvContent = "data:text/csv;charset=utf-8," 
        + phonenumber.map(row => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "phone Number List.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
