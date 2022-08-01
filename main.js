window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm("service_kl4fp5h","template_1rgjuxd", this)
        .then(function() {
          console.log('SUCCESS!');
        }, function(error) {
          console.log('FAILED...', error);
        });
      const inputs = document.querySelectorAll(".input");
      const msg = document.querySelector(".feedback");
      inputs.forEach(i => {
        i.value = "";
      });

      msg.style.visibility = "visible";
  });
}




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
  const fleur = document.querySelector(".fleur");
  const apropo = document.querySelector(".grostitre");
  const rezo = document.querySelector(".grosrezo");


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


      fleur.style.top = 55 + (-(_mouseY - _h) /150) + "%"
      fleur.style.left = 10 + (-(_mouseX - _w) /300) + "%"

      apropo.style.top = -20 + (-(_mouseY - _h) /80) + "vh"
      rezo.style.top = 3 + (-(_mouseY - _h) /30) + "vh"

  }





})();