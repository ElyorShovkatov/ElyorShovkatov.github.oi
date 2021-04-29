window.addEventListener('load', function () {
  
  /*======================== loader ==========================*/
  let load = document.querySelector('.loader');
  load.style.display = "none"
  
  /* ======= bg change ======= */
  let bgBtn = document.querySelector('.bulb');
  let style = document.querySelector('#style')
  if(localStorage.getItem('style')){
    style.setAttribute('href', localStorage.getItem('style'))
  }
  bgBtn.addEventListener('click',function(){
    if(!bgBtn.classList.contains('bulb_active')){
      style.setAttribute('href', './css/style.white.css')
      bgBtn.classList.add('bulb_active')
      localStorage.setItem('style', './css/style.white.css')
    }
    else{
      style.setAttribute('href', './css/style.css')
      bgBtn.classList.remove('bulb_active')
      localStorage.setItem('style', './css/style.css')
    }
  })
  
  
  /* ======= svg to word ======= */
  let a = document.querySelectorAll('.links a');
  let svg = document.querySelectorAll('.links a i');
  let spn = document.querySelectorAll('.links a span');

  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('mouseover',function(){
        svg[i].style.display = "none"
        spn[i].style.display = "block"
      })
      a[i].addEventListener('mouseout',function(){
        svg[i].style.display = "block"
        spn[i].style.display = "none"
    })
  }

  /*======================== writer ==========================*/

  
  var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    loop: false,
    onBegin: function(self) { prettyLog('onBegin ' + self) },
    onComplete: function(self) { prettyLog('onCmplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { prettyLog('onReset ' + self) },
    onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { prettyLog('onDestroy ' + self) }
  });
  
  

});
