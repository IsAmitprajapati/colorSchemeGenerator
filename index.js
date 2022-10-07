let color = document.getElementById("colorName")
let btnEl = document.getElementById("getColor")
let modeEl = document.getElementById("mode")
let colorShadeEl = document.getElementsByClassName("colorShade")
let colorShadeNameEl = document.getElementsByClassName("colorShadeName")
let colorShadeHexValueEl = document.getElementsByClassName("colorShadeHexValue")


let baseUrl = "https://www.thecolorapi.com/"
let numColor = []

    btnEl.addEventListener("click", getColor)

function getColor(){
    let colorCode = color.value.slice(1)  
    const query = `${baseUrl}scheme?hex=${colorCode}&mode=${modeEl.value}&count=5`
    fetch(query, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then((data) => {
           
           colorShadeEl[0].style.background = data.colors[0].hex.value
           colorShadeEl[1].style.background = data.colors[1].hex.value
           colorShadeEl[2].style.background = data.colors[2].hex.value   
           colorShadeEl[3].style.background = data.colors[3].hex.value
           colorShadeEl[4].style.background = data.colors[4].hex.value
           
           colorShadeHexValueEl[0].value = data.colors[0].hex.value
           colorShadeHexValueEl[1].value = data.colors[1].hex.value
           colorShadeHexValueEl[2].value = data.colors[2].hex.value
           colorShadeHexValueEl[3].value = data.colors[3].hex.value
           colorShadeHexValueEl[4].value = data.colors[4].hex.value
           
    })    
}

getColor()

function copyClipBoard(num){
    const input = colorShadeHexValueEl[num].value;
    console.log(input)
    navigator.clipboard.writeText(input)  
}


