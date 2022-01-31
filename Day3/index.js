var newElement = document.createElement("h1")
var parElem = document.getElementById("app")
newElement.textContent = "I am the New Element"
console.log(newElement)
parElem.appendChild(newElement)