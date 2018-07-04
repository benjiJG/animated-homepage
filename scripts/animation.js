$('document').ready(function(){
  TweenMax.from('#top', 1, {bottom: '-=300px', rotation: 360, ease: SlowMo.easeOut, delay: 0.5});
  TweenMax.from('#leftLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut, delay: 0});
  TweenMax.from('#rightLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut, delay: 0});

  TweenMax.from('#mug', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: Sine.easeIn, delay: 1.3});

  TweenMax.from('#pcStand', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: Bounce.easeOut, delay: 2});
  TweenMax.from('#pcMonitor', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: Bounce.easeOut, delay: 2.5});
  TweenMax.from('#pcScreen', 0.5, {scaleY: 0, scaleX: 0, opacity: 0.8, transformOrigin: "50% 50%", ease: Elastic.easeOut, delay: 3});

  
});  