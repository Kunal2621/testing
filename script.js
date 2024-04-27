window.addEventListener("mousemove",function(details){
  var xval= gsap.utils.mapRange(0, window.innerWidth, 100, window.innerWidth-100,
  details.clientX)
    gsap.to('#rect', {
     left: xval +"px",
     ease : Power3,


    });
});

// any changes
// any cangse are done
// ye js hai 
// main wala
// js wala 
