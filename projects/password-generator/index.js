let myLeads = ["www.google.com", "www.facebook.com", "www.twitter.com", "www.instagram.com" ]
let inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ulEl")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
})

let listItems = ""
for (let i=0; i < myLeads.length; i++) {
    console.log(myLeads[i])
    listItems +=  "<li>" + myLeads[i] + "</li>"
}
ulEl.innerHTML = listItems