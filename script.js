const buttons = document.querySelectorAll('.btn-link');
const body = document.body;


const defaultBg = "linear-gradient(135deg,  #0e0e13 0%, #373788 50%, #1e851e 100%)";

buttons.forEach(button => {

  const ubahBackground = () => {
    const gambarBaru = button.getAttribute('data-bg');
    body.style.backgroundImage = `url('${gambarBaru}')`;
  };

 
  const resetBackground = () => {
    body.style.backgroundImage = defaultBg;
  };


  button.addEventListener('mouseenter', ubahBackground);
  button.addEventListener('mouseleave', resetBackground);


  button.addEventListener('touchstart', ubahBackground);
});
