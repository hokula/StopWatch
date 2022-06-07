function StopWatch() {
    var ms = 0;
    var s = 0;
    var min = 0;
    var interval;
    var timer = document.getElementById('timer');
    var lapContainer = document.getElementById('lap-container');
    var isRunning = false;
    var isLapClicked = false;

    function currentTime() {
        return `${min < 10 ? '0' + min : min}:${s < 10 ? '0' + s : s}:${ms < 10 ? '0' + ms : ms}`;
    }
    var counter = function () {
        ms++;
        if (ms > 99) {
            s++;
            ms = 0;
        }
        if (s > 59) {
            min++;
            s = 0;
        }
        timer.innerHTML = currentTime();
    }

    this.start = function () {
        if(isRunning) return;

        isRunning = true;
        interval = setInterval(counter, 10);
    }
    this.stop = function () {
        if(!isRunning) return;
        clearInterval(interval);
        isRunning = false;
        isLapClicked = false;
    }
    this.lap = function () {
        if (ms === 0 && s === 0 && min === 0) return;
        if(!isRunning && isLapClicked) return;
        var lap = document.createElement('h4');
        lap.innerHTML = currentTime();
        lapContainer.appendChild(lap);
        isLapClicked = true;

    }
    this.restart = function () {
        ms = 0;
        s= 0;
        min = 0;
        lapContainer.innerHTML = '';
        timer.innerHTML = currentTime();
        clearInterval(interval);
        isRunning = false;
    }
}