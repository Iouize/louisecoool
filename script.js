const illuMoi = document.querySelector('.moi');

const bulles = document.querySelectorAll('.bulle');
const dernierBulle = (bulles.length) - 1;

function afficheBulleDiscu(){
    if(bulles[dernierBulle].style.display == 'block') {
        for(var j = 0; j < bulles.length; j++ ) {
            bulles[j].style.display = 'none';
        }
        return;
    }

    for (var i = 0; i < bulles.length; i++) {
        let displayBulle = bulles[i].style.display;
        let audio = new Audio('audio/son' + (i+1) + '.mp3');
        
        if (displayBulle != 'block') {
            audio.play();
            bulles[i].style.display = 'block';
            return;
        }   
    }  
}



illuMoi.addEventListener('click', afficheBulleDiscu);
