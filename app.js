let colors = ["Red","Blue","Crimson","Purple","Chartreuse","Aqua"]
let currentIndex = 0

function changer(){
   document.body.style.background = colors[currentIndex]
   document.getElementById("display").innerText = `Color: ${colors[currentIndex]}`
   currentIndex = (currentIndex + 1) % colors.length
}
