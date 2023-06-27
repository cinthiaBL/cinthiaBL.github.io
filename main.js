let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #2ecbaa">Expando mis habilidades para convertirme en una profesional <br> competente en el campo del desarrollo web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
