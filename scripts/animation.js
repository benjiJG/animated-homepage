$('document').ready(function(){
  TweenMax.from('#top', 1, {bottom: '-=300px', rotation: 360, ease: SlowMo.easeOut, delay: 1.5});
  TweenMax.from('#leftLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut, delay: 1});
  TweenMax.from('#rightLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut, delay: 1});

  TweenMax.from('#mug', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: Sine.easeIn, delay: 2.3});

  TweenMax.from('#pcStand', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: SlowMo.easeOut, delay: 2.3});
  TweenMax.from('#pcMonitor', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: SlowMo.easeOut, delay: 2.8});
  TweenMax.from('#pcScreen', 0.5, {scaleY: 0, scaleX: 0, opacity: 0.8, transformOrigin: "50% 50%", ease: Elastic.easeOut, delay: 3.5});

  TweenMax.from('#keyboardBase', 0.5, {scaleY: 0.5, scaleX: 0.5, opacity: 0, transformOrigin: "50% 50%", ease: Sine.easeOut, delay: 3.5});
  TweenMax.from('#mouse', 0.5, {scaleY: 0.5, scaleX: 0.5, opacity: 0, transformOrigin: "50% 50%", ease: Sine.easeOut, delay: 3.5});

  TweenMax.staggerFrom(['#key1', '#key2', '#key3', '#key4', '#key5', '#key6', '#key7', '#key8', '#key9', '#key10', '#key11', '#key12', '#key13'], 0.5, {top: '-=25px', delay: 4, autoAlpha: 0}, 0.2);
});  