var timer = document.getElementById('timer');
var speechBtn = document.getElementById('speech');
var ttBtn = document.getElementById('tt');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

function startSpeech() {
  speechBtn.textContent = 'Stop';
  watch.reset();
  watch.start('Speech');
  document.getElementById('tt').style.visibility = 'hidden'; 
  document.getElementById("timer").style.fontSize = "x-small";	
  document.getElementById("progress").innerHTML = "Speech in progress....";
  speechBtn.style.backgroundColor = 'orange';
}

function startTT() {
  ttBtn.textContent = 'Stop';
  watch.reset();
  watch.start('TT');
  document.getElementById('speech').style.visibility = 'hidden';
  document.getElementById("timer").style.fontSize = "x-small";
  document.getElementById("progress").innerHTML = "Table Topic in progress...";
  ttBtn.style.backgroundColor = 'orange';
  
}

function stopSpeech() {
  speechBtn.textContent = 'Speech';
  watch.stop();
  document.getElementById('speech').style.visibility = 'visible';
  document.getElementById('tt').style.visibility = 'visible';
  document.getElementById("timer").style.fontSize = "xx-large";
  document.getElementById("progress").innerHTML = "";	
  speechBtn.style.backgroundColor = 'green';
}

function stopTT() {
  ttBtn.textContent = 'Table Topic';
  watch.stop();
  document.getElementById('speech').style.visibility = 'visible';
  document.getElementById('tt').style.visibility = 'visible';
  document.getElementById("timer").style.fontSize = "xx-large";
  document.getElementById("progress").innerHTML = "";
  ttBtn.style.backgroundColor = 'green';
}

speechBtn.addEventListener('click', function() {
  watch.isOn ? stopSpeech() : startSpeech();
});

ttBtn.addEventListener('click', function() {
  watch.isOn ? stopTT() : startTT();
});
