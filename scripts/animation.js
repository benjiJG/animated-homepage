$('document').ready(function(){
  var t1 = new TimelineMax();


  // Desk entrance
  t1.from('#top', 1, {bottom: '-=300px', rotation: 360, ease: SlowMo.easeOut}, 1.5)
    .from('#leftLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut}, 1)
    .from('#rightLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut}, 1)

  // Mug entrance
    .from('#mug', 0.5, {scaleY: 0, transformOrigin: '50% bottom', ease: Sine.easeIn}, 2.3)

  // PC entrance
    .from('#pcStand', 0.5, {scaleY: 0, transformOrigin: '50% bottom', ease: SlowMo.easeOut,}, 2.3)
    .from('#pcMonitor', 0.5, {scaleY: 0, transformOrigin: '50% bottom', ease: SlowMo.easeOut}, 2.8)
    .from('#pcScreen', 0.5, {scaleY: 0, scaleX: 0, opacity: 0.8, transformOrigin: '50% 50%', ease: Elastic.easeOut}, 3.5)

  // KBM entrance
    .from('#keyboardBase', 0.5, {scaleY: 0.5, scaleX: 0.5, opacity: 0, transformOrigin: '50% 50%', ease: Sine.easeOut}, 3.5)
    .from('#mouse', 0.5, {scaleY: 0.5, scaleX: 0.5, opacity: 0, transformOrigin: '50% 50%', ease: Sine.easeOut,}, 3.5)
  // Keyboard keys placed
    .staggerFrom(['#key1', '#key2', '#key3', '#key4', '#key5', '#key6', '#key7', '#key8', '#key9', '#key10', '#key11', '#key12', '#key13'], 0.5, {top: '-=25px', autoAlpha: 0}, 0.2)

  // Mouse movement + click (+ button entrance)
    .to('#btn', 0.5, {autoAlpha: 1}, 6)
    .to('#cursor', 2, {left: '-=75px', autoAlpha: 1, ease: Sine.easeInOut,}, 6.2)
    .to('#mouse', 2, {left: '-=25px', ease: Sine.easeInOut}, 6.2)
    .add( function(){ $('#btn').css('background', 'url(resources/btnSelected.svg)');  }, 7.8)
    .to('#mouse', 0.2, {bottom: '-=3'}, 8.2)
    .add( function(){ $('#btn').css('background', 'url(resources/btn.svg)'); }, 8.2)
    .to('#mouse', 0.2, {bottom: '+=3'}, 8.4)
    .add( function(){ $('#btn').css('background', 'url(resources/btnSelected.svg)');  }, 8.4)
    
  // Light switching on effect
    .to('body', 1, {backgroundColor: '#EEE999', ease: RoughEase.ease.config({ template:  Sine.easeOut, strength: 2, points: 35, taper: "none", randomize: true, clamp: true}) }, 8.5)

  // Change screen elements
    .to('#btn', 0.5, {opacity: 0, scaleX: 0, scaleY: 0}, 8.5)
    .to('#cursor', 0.5, {opacity: 0}, 8.5)
    .from('#box1', 0.5, {scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: Back.easeOut}, 9.3);
});