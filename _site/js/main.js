'use strict';

function _mangleConstructorTypeCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// Define TextMangler
var TextMangler = function () {
  function TextMangler(el) {
    _mangleConstructorTypeCheck(this, TextMangler);

    this.el = el;
    //this.words = el.getAttribute('data-words');
    //this.wordLen = words.length;
    //this.wordIndex = 0;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  TextMangler.prototype.setText = function setText(newText) {
      console.log("new=" + newText);
    var _this = this;

    var oldText = this.el.innerText;
    console.log(oldText);
    var length = Math.max(oldText.length, newText.length);
    var promise = new Promise(function (resolve) {
      return _this.resolve = resolve;
    });
    this.queue = [];
    for (var i = 0; i < length; i++) {
      var from = oldText[i] || '';
      var to = newText[i] || '';
      var start = Math.floor(Math.random() * 40);
      var end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from: from, to: to, start: start, end: end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  };

  TextMangler.prototype.update = function update() {
    var output = '';
    var complete = 0;
    for (var i = 0, n = this.queue.length; i < n; i++) {
      var _queue$i = this.queue[i];
      var from = _queue$i.from;
      var to = _queue$i.to;
      var start = _queue$i.start;
      var end = _queue$i.end;
      var char = _queue$i.char;

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += '<span class="dud">' + char + '</span>';
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };

  TextMangler.prototype.randomChar = function randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  };

  return TextMangler;
}();


// Implement Mangler
window.onload = function() {
    var el = document.getElementById('mangler');
    var tm = new TextMangler(el);
    var words = ["Developer", "Designer", "Tester"]
    console.log(words);
    var wordLen = words.length;
    var wordIndex = 0;

    var next = function next(wordIndex) {
      tm.setText(words[wordIndex]).then(function () {
          console.log(wordIndex);
          wordIndex = wordIndex < wordLen - 1 ? wordIndex + 1 : 0;
        setTimeout(next(wordIndex), 10000);
      });
    };

    next(0);
}




// var scramble = function(el, active, period, selfActivates) {
//     this.el = el;
//     this.selfActivates = selfActivates || 5;
//     this.active = active;
//     this.txt = '';
// }
//
// var TxtType = function(el, toRotate, period) {
//         this.toRotate = toRotate;
//         this.el = el;
//         this.loopNum = 3;
//         this.period = 5000;//this.period = parseInt(period, 10) || 2000;
//         this.txt = '';
//         this.tick();
//         this.isDeleting = false;
//     };
//
//     TxtType.prototype.tick = function() {
//         var i = this.loopNum % this.toRotate.length;
//         var fullTxt = this.toRotate[i];
//
//         if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }
//
//         this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
//
//         var that = this;
//         var delta = 200 - Math.random() * 100;
//
//         if (this.isDeleting) { delta /= 2; }
//
//         if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 500;
//         }
//
//         setTimeout(function() {
//         that.tick();
//         }, delta);
//     };
//
//     window.onload = function() {
//         var elements = document.getElementsByClassName('typewrite');
//         for (var i=0; i<elements.length; i++) {
//             var toRotate = elements[i].getAttribute('data-type');
//             var period = elements[i].getAttribute('data-period');
//             if (toRotate) {
//               new TxtType(elements[i], JSON.parse(toRotate), period);
//             }
//         }
//     };
