// Today we will be adding our JavaScript functionality to our MadLibs Project.
// 1. Before we can add JavaScript into our MadLibs, we need to give each Input element a unique id. 
// 2.After giving the inputs their unique id, create an app.js file and make a createParagraph function.
// 3. Inside of this function you will declare a variable for each word. var firstword - var fifthword if you have 5 blanks. 
// 4. We are going to assign these variables to our document.getElementById() except, after the parenthesis, we will add a .value. 
// 5.After grabbing all of the variables we're going to declare another var called paragraph, this is where your story will go, but the blanks will be replaced with the corresponding variable name
// 6. Lastly, we will add a  document.getElementById('answer').innerHTML = paragraph;  This is going to target a div we place on our HTML to output our story.


//Example ("COMPUTER", "FRIENDS", "ENJOYED", "PERFECT", "PLAYING")
 function createParagraph(){
    var firstWord = document.getElementById('word1').value;
    var secondWord = document.getElementById('word2').value;
    var thirdWord = document.getElementById('word3').value;
    var fourthWord = document.getElementById('word4').value;
    var fifthWord = document.getElementById('word5').value;

  var paragraph = "Today I have created Mad libs using the " + firstWord + "." + "The Mad Libs I created is really awesome to play with " + secondWord + "." + " Some of my friends " + thirdWord + " the mad libs I created" + "." + " The fun mad libs is a " + fourthWord + " way to spend time and have fun" + "." + " we have been " + fifthWord + " Mad Libs everyday" + "." + "<br>" +
  "I hope you enjoy playing with this Mad Libs template!"

 document.getElementById('answer').innerHTML = paragraph;
}