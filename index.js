function shout(string) {
    return string.toUpperCase() }

function whisper(string) {
    return string.toLowerCase() }

function logShout(string) {
    console.log(string.toUpperCase()) }

function sayHiToGrandma(string) {
    if (string.toUpperCase() === string) {
      return "Yes Indeed" }

    else if (string === "I love you, grandma") {
      return "I love you, too" }
      else {
        return ("I CANT HEAR YOU")
      }
