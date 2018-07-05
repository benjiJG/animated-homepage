$('document').ready(function(){
  var t1 = new TimelineMax();


  // Desk entrance
  t1.from('#top', 1, {bottom: '-=300px', rotation: 360, ease: SlowMo.easeOut}, 1.5)
    .from('#leftLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut}, 1)
    .from('#rightLeg', 0.8, {bottom: '-=300px', ease: Bounce.easeOut}, 1)

  // Mug entrance
    .from('#mug', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: Sine.easeIn}, 2.3)

  // PC entrance
    .from('#pcStand', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: SlowMo.easeOut,}, 2.3)
    .from('#pcMonitor', 0.5, {scaleY: 0, transformOrigin: "50% bottom", ease: SlowMo.easeOut}, 2.8)
    .from('#pcScreen', 0.5, {scaleY: 0, scaleX: 0, opacity: 0.8, transformOrigin: "50% 50%", ease: Elastic.easeOut}, 3.5)

  // KBM entrance
    .from('#keyboardBase', 0.5, {scaleY: 0.5, scaleX: 0.5, opacity: 0, transformOrigin: "50% 50%", ease: Sine.easeOut}, 3.5)
    .from('#mouse', 0.5, {scaleY: 0.5, scaleX: 0.5, opacity: 0, transformOrigin: "50% 50%", ease: Sine.easeOut,}, 3.5)
  // Keyboard keys placed
    .staggerFrom(['#key1', '#key2', '#key3', '#key4', '#key5', '#key6', '#key7', '#key8', '#key9', '#key10', '#key11', '#key12', '#key13'], 0.5, {top: '-=25px', autoAlpha: 0}, 0.2)

  // Mouse movement + click (+ button entrance)
    .to('#btn', 0.5, {autoAlpha: 1}, 6)
    .to('#cursor', 2, {left: '-=75px', autoAlpha: 1, ease: Sine.easeInOut,}, 6.2)
    .to('#mouse', 2, {left: '-=25px', ease: Sine.easeInOut}, 6.2)
    .add( collisionCheck, 7.8)
    .to('#mouse', 0.2, {bottom: '-=3'}, 8.2)
    .to('#mouse', 0.2, {bottom: '+=3'}, 8.4);
});

// Checks to see if cursor has collided with button to 'select' it
var collisionCheck = function() {
  if ( isColliding($('#cursor'), $('#btn')) ) {
    $('#btn').css('background', 'url(resources/btnSelected.svg)'); 
  }
}

var isColliding = function( $div1, $div2 ) {
	// Div 1 data
	var d1_offset             = $div1.offset();
	var d1_height             = $div1.outerHeight( true );
	var d1_width              = $div1.outerWidth( true );
	var d1_distance_from_top  = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset             = $div2.offset();
	var d2_height             = $div2.outerHeight( true );
	var d2_width              = $div2.outerWidth( true );
	var d2_distance_from_top  = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );

	// Return whether it IS colliding
	return ! not_colliding;
};