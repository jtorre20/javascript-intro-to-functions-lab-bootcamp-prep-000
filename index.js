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
function sayHiToGrandma(string){
  var whisper = 'hello!'
  whisper.toLowerCase() === whisper //true
  return ("I can't hear you!")
}
function sayHiToGrandma(string){
  var shout = 'HELLO!'
  shout.toUpperCase() === shout //true
  return ("YES INDEED!")
}
