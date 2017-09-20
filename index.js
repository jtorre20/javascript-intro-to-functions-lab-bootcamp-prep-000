function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(whisper){
  whisper(string)
  return ("I can't hear you!")
}
function sayHiToGrandma(shout){
  shout(string)
  return ("YES INDEED!")
}
