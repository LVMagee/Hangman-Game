window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

 var oceanWords = ["wall", "coral", "fish", "shark", "grouper", "sponge", "nudi", "trigger",
    "tiger", "reef", "turtle", "ocean", "bubble", "barrel", "nurse", "mask", "fins", "tank",
    "vest", "jelly", "float", "clam", "shrimp", "crab", "whale", "dolpin", "oxygen", "scuba", 
    "barrel", "waves"];


  var buttons;      
  var word ;              
  var guess ;             
  var guesses = [ ];      
  var lives ;            
  var counter ;          
  var space;  
  var showLives = document.getElementById("mylives");



    function buttons () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
 }       

   function result () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

     function comments () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Diver down to Davy Jones!";
       document.getElementById('bubble').play();
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "Diver lives to dive again!";
       document.getElementById('woohoo').play();
      }
    }
  }

   function check() {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }


  function play() {
    word = oceanWords[Math.floor(Math.random() * oceanWords.length)];
    word = word.replace(/\s/g, "-");
    // console.log(word);
    buttons();

    guesses = [ ];
    lives = 9;
    counter = 0;
    space = 0;
    result();
    comments();
  }

  play();

  
 document.getElementById('reset').onclick = function() {
  correct.parentNode.removeChild(correct);
  letters.parentNode.removeChild(letters);
  
  // location.reload();

    play();
  }
}











