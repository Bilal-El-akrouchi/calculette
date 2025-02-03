// let b0 = document.querySelector('.b0')  
// let b1 = document.querySelector('.b1')  
// let b2 = document.querySelector('.b2')  
// let b3 = document.querySelector('.b3')  
// let b4 = document.querySelector('.b4')  
// let b5 = document.querySelector('.b5')  
// let b6 = document.querySelector('.b6')  
// let b7 = document.querySelector('.b7')  
// let b8 = document.querySelector('.b8')  
// let b9 = document.querySelector('.b9')  

// let bPlus = document.querySelector('.b+')  
// let bMoin = document.querySelector('.b-')  
// let bx = document.querySelector('.bx')  
// let bDiv = document.querySelector('.b/')  

// let chiffreSellectionné=[]

// b2.addEventListener('click',function() {
//     chiffreSellectionné.push('2')
    
// })

// récuperation des key des rouches
let Touche=[...document.querySelectorAll('.boutonC')]

const listeKeycode= Touche.map(touche => touche.dataset.key);
console.log(listeKeycode);

// récuperation a la pression de btn
document.addEventListener('keydown', (e) => {
    let valeur = e.keyCode.toString();
    console.log(valeur, typeof valeur);
    calculer(valeur)
}
)
// récupération au click 
document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key
    console.log(valeur);
    calculer(valeur)
        
})

// le calcule
const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)){
        switch (key) {
            case value:
                
                break;
        
            default:
                break;
        }        
    }
}
