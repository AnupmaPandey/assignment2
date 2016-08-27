(function (window) {

Hello Yaakov
Good Bye Joe
Good Bye Johnny
Good Bye Jackson
Hello Poll
Hello Franky
Hello Lar
Hello Polly
Hello Leo
Good Bye Jimy
var names = ["Yaakov", "Joe", "Johnny", "Jackson", "Poll", "Franky", "Lar", "Polly", "Leo", "Jimy"];


for (var i in names) {


  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

 
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
