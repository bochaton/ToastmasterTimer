function Stopwatch(elem) {
  var time = 0;
  var offset;
  var interval;
  var sType;

  function update() {
    if (this.isOn) {
      time += delta();
    }
    
    elem.textContent = timeFormatter(time);
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;

    offset = now;

    return timePassed;
  }

  function timeFormatter(time) {
    time = new Date(time);

    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    var elapsedSeconds = (time.getMinutes() * 60) + time.getSeconds();
 
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }

    if (sType === 'Speech') {
		if (elapsedSeconds >= 300 && elapsedSeconds < 360) {
			$('div.mlw_qmn_timer').css("background-color", "green");
		} else if (elapsedSeconds >= 360 && elapsedSeconds < 420) {
			$('div.mlw_qmn_timer').css("background-color", "yellow");
		} else if (elapsedSeconds >= 420 && elapsedSeconds < 450) {
			$('div.mlw_qmn_timer').css("background-color", "red");
		} else if (elapsedSeconds >= 450) {
			$('div.mlw_qmn_timer').css("background-color", "black");
		}		
	} else if (sType === 'TT') {
		if (elapsedSeconds >= 60 && elapsedSeconds < 90) {
			$('div.mlw_qmn_timer').css("background-color", "green");
		} else if (elapsedSeconds >= 90 && elapsedSeconds < 120) {
			$('div.mlw_qmn_timer').css("background-color", "yellow");
		} else if (elapsedSeconds >= 120 && elapsedSeconds < 150) {
			$('div.mlw_qmn_timer').css("background-color", "red");
		} else if (elapsedSeconds >= 150) {
			$('div.mlw_qmn_timer').css("background-color", "black");
		}
	}
			
    return minutes + ' : ' + seconds;
  }

  this.start = function(speechType) {
	sType = speechType;
    interval = setInterval(update.bind(this), 10);
    offset = Date.now();
    this.isOn = true;
  };

  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
  };

  this.reset = function() {
    time = 0;
    update();
  };

  this.isOn = false;
}
