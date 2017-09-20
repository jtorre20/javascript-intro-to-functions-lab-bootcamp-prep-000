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
  var string = 'hello!'
  string.toLowerCase() === string //true
  return ("I can't hear you!")
}
function sayHiToGrandma(string){
  var string = 'HELLO!'
  string.toUpperCase() === string //true
  return ("YES INDEED!")
}
function sayHiToGrandma(string){
  var mixedCase = "I love you, Grandma."
  mixedCase.toLowerCase() === mixedCase

  mixedCase.toUpperCase() === mixedCase
  return ("I love you, too.")
}