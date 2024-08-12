const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*====== RELLAX =====*/
var rellax = new Rellax('.parallax');


/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: .5, y: 30, ease:'expo.out'});
gsap.from('.nav__toggle', {opacity:0, duration: 3, delay: .7, y: 30, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: .7, y: 35, ease:'expo.out', stagger: .2})

/*Text*/
gsap.from('#text', {opacity:0, duration: 3, delay: .5, y: 30, ease:'expo.out'});
gsap.from('#pa', {opacity:0, duration: 3, delay: .7 , y: 30, ease:'expo.out'});

/*Scroll*/
gsap.from('.home__scroll', {opacity:0, duration: 3, delay: 1.5, y: 25, ease:'expo.out'});


/*====== SCROLL REVEAL SECTION ======*/
const sr = ScrollReveal({
    duration: 2500,
    reset: true
});

/*Data*/
sr.reveal('.section__data',{origin: 'left',distance: '70px'}); 

/*Imgs*/
sr.reveal('.section__img',{origin: 'left',distance: '90px',delay: 200}); 




let text = document.getElementById('text');
let tree = document.getElementById('tree');
let hill = document.getElementById('hill');
let cloud2 = document.getElementById('cloudtwo');
let cloud1 = document.getElementById('cloudone');
let pa = document.getElementById('pa');

window.addEventListener('scroll',()=>{
    let value =window.scrollY;
    text.style.marginTop=value*2.0+'px';
    pa.style.marginTop=value*2.0+'px';
    
    cloud2.style.left=value*1.5+'px';
    cloud1.style.left=value* -1.5+'px';
} 
)

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrases = ["Sevval", "a cs student", "a web developer"];
  const el = document.getElementById("typewriter");

  let sleepTime = 100;

  let curPhraseIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };
  writeLoop();
  
  
  function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }



  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
  
    const templateParams = {
        from_name: name,
        from_email: email,
        message_title: title,
        message_body: message
    };
  
    emailjs.send('service_03iacp8', 'template_nnjfjwo', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           document.getElementById('response').textContent = 'Thank you for your message, ' + name + '! I\'ll get back to you at ' + email + ' soon.';
           document.getElementById('contactForm').reset();
        }, function(error) {
           console.error('FAILED...', error);
           document.getElementById('response').textContent = 'Sorry, something went wrong. Please try again.';
        });
  });
  