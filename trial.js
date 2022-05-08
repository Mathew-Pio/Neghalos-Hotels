const Footer = document.getElementById('footer');


Footer.addEventListener('mousemove' , runEvent);

function runEvent (e){
  Footer.style.backgroundColor = "rgb("+e.offsetX+" , "+e.offsetY+" , 200)"
}