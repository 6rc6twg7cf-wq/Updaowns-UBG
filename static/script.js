let sounds = []

fetch("sounds.json")
.then(res => res.json())
.then(data => {

sounds = data

displaySounds(sounds)

})

function displaySounds(list){

let board = document.getElementById("soundboard")

board.innerHTML=""

list.forEach(sound=>{

let btn = document.createElement("button")

btn.innerText = sound.name

btn.onclick = ()=>{

let audio = new Audio(sound.file)

audio.play()

}

board.appendChild(btn)

})

}

function searchSound(){

let input =
document.getElementById("search")
.value
.toLowerCase()

let filtered = sounds.filter(s =>
s.name.toLowerCase().includes(input)
)

displaySounds(filtered)

}

function randomSound(){

let random =
sounds[Math.floor(Math.random()*sounds.length)]

let audio = new Audio(random.file)

audio.play()

}

function uploadSound(){

let file =
document.getElementById("upload").files[0]

if(!file) return

let url = URL.createObjectURL(file)

let name = file.name

sounds.push({
name:name,
file:url
})

displaySounds(sounds)

}