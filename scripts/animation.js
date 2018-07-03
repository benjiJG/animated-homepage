$('document').ready(function(){
  TweenMax.from('#top', 1, {bottom: '-=300px', rotation: 360, ease: SlowMo.easeOut, delay: 0.5});
  TweenMax.from('#leftLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut, delay: 0});
  TweenMax.from('#rightLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut, delay: 0});

  TweenMax.from('#mug', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: Sine.easeIn, delay: 1.3});

  TweenMax.from('#pcStand', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: Sine.easeIn, delay: 2});
});  