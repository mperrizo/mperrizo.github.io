// Haven't added transitions just yet but I got my logo desgined and on the canvas / stage

$('#logo').lettering();

(  function(){
  
//   Remove Google logo
//   First Letter G
  TweenMax.to('.char1', 2, {rotation: 1440, scale: 2.3, opacity: 0, delay: 1.5})
//   First Letter O
  TweenMax.to('.char3', 2, {rotation: 1440, scale: 2.3, opacity: 0, delay: .25})
//   Second Letter O
  TweenMax.to('.char2', 2, {rotation: 1440, scale: 2.3, opacity: 0, delay: 2})
//   Second Letter G
  TweenMax.to('.char5', 2, {rotation: 1440, scale: 2.3, opacity: 0, delay: 1.75})
//   Letter L
  TweenMax.to('.char4', 2, {rotation: 1440, scale: 2.3, opacity: 0, delay: .5})
//   Letter E
  TweenMax.to('.char6', 2, {rotation: 1440, scale: 2.3, opacity: 0, delay: 1})
  
//   Bring in VCD svg
//   Left side of v
  TweenMax.from('#vLeft', 3 ,{x: -200, delay: 3.75, opacity: 0, ease: Elastic.easeOut.config(1, 0.3)})
//   Right side of v
  TweenMax.from('#vRight', 3 ,{x: 200, y: -100, delay: 4.5, opacity: 0, ease: Elastic.easeOut.config(1, 0.3)})
//   Top of c
  TweenMax.from('#cTop', 3 ,{x: -200, y: -200, delay: 4, opacity: 0, ease: Elastic.easeOut.config(1, 0.3)})
//   Bottom of c
  TweenMax.from('#cBottom', 3 ,{y: 200, delay: 5, opacity: 0, ease: Elastic.easeOut.config(1, 0.3)})
//   Top of d
  TweenMax.from('#dTop', 3 ,{y: -200, delay: 4.75, opacity: 0, ease: Elastic.easeOut.config(1, 0.3)})
//   Bottom of d
  TweenMax.from('#dBottom', 3 ,{x: 200, delay: 4.25, opacity: 0, ease: Elastic.easeOut.config(1, 0.3)})
  
//   Explosion!
  TweenMax.to('#circle', 1.25, {scale: 10000, opacity: 0, delay: 7.7, transformOrigin: "50% 50%"})
}());