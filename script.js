let yesButton = document.querySelector('.yes-button');
let noButton = document.querySelector('.no-button');
let image = document.querySelector('img');
let text = document.querySelector('h3');

noButton.addEventListener('click', function(){
    noButton.classList.add('small');
    yesButton.classList.add('big');
    image.src = 'src/no.jpeg';
    text.textContent = 'Ecco, vedi? Hai detto NO, ma guarda come hai ridotto questo povero bambino. Riprova!';
      
});

yesButton.addEventListener('click', function(){
    yesButton.classList.add('big');
    image.src = 'src/yes.jpeg';
    text.textContent = 'Ottimo lavoro. Ora posa il telefono e comprami un regalo!!';
    
    var scalar = 2.5;
    var heart = confetti.shapeFromText({ text: '❤️', scalar});
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        shapes: [heart],
        scalar
    });
})
