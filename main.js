/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

(function() {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const face = document.querySelector(".face");
  const fleur = document.querySelector(".fleur");
  const apropo = document.querySelector(".grostitre");


  console.log(fleur)
  // Magic happens here
  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;


      // if (((_mouseY - _h) /6) > 0) {
      //   face.style.bottom = -(_mouseY - _h) /100 + "px"
      // } else {
      //   face.style.bottom = 0 + "px"
      // }
      // face.style.right = 100 -(_mouseX - _w) /100 + "px"


      fleur.style.top = 55 + (-(_mouseY - _h) /150) + "%"
      fleur.style.left = 10 + (-(_mouseX - _w) /300) + "%"

      apropo.style.top = -20 + (-(_mouseY - _h) /80) + "vh"
  }





})();