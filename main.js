// Récupération des boutons et de l'affichage
let Touche = [...document.querySelectorAll('.boutonC')];
let input = document.querySelector('.input');
let operation = "";

// Liste des keycodes des boutons
const listeKeycode = Touche.map(touche => touche.dataset.key);
console.log(listeKeycode);

// Gestion de l'affichage des touches clavier
document.addEventListener('keydown', (e) => {
    let valeur = e.keyCode.toString();
    if (listeKeycode.includes(valeur)) {
        mettreAJourOperation(valeur);
    }
});

// Gestion de l'affichage des touches cliquées
document.addEventListener('click', (e) => {
    let valeur = e.target.dataset.key;
    if (listeKeycode.includes(valeur)) {
        mettreAJourOperation(valeur);
    }
});

const mettreAJourOperation = (valeur) => {
    switch (valeur) {
        case "67": 
            operation = "";
            break;
        case "13":
            calculerOperation();
            return;
        case "187":
            operation += "+";
            break;
        case "189":
            operation += "-";
            break;
        case "186":
            operation += "*";
            break;
        case "191":
            operation += "/";
            break;
        default:
            if (!isNaN(valeur)) {
                operation += String.fromCharCode(valeur);
            }
            break;
    }
    input.textContent = operation;
};

// CALCULE 

const calculerOperation = () => {
    try {
        let nombre = "";
        let nombres = [];
        let operateurs = [];
        let dernierCaractere = "";

        
        for (let i = 0; i < operation.length; i++) {
            let char = operation[i];

            if (!isNaN(char) || char === ".") {
                nombre += char;
            } else if (["+", "-", "*", "/"].includes(char)) { 
                if (nombre === "" && char === "-" && (i === 0 || dernierCaractere === "(")) {
                    
                    nombre = "-";
                } else {
                    nombres.push(parseFloat(nombre));
                    operateurs.push(char);
                    nombre = "";
                }
            }
            dernierCaractere = char;
        }

        if (nombre !== "") {
            nombres.push(parseFloat(nombre));
        }

        let i = 0;
        while (i < operateurs.length) {
            if (operateurs[i] === "*" || operateurs[i] === "/") {
                let a = nombres[i];
                let b = nombres[i + 1];
                let res = operateurs[i] === "*" ? a * b : b !== 0 ? a / b : "Erreur";

                nombres.splice(i, 2, res);
                operateurs.splice(i, 1);
            } else {
                i++;
            }
        }

        i = 0;
        while (i < operateurs.length) {
            let a = nombres[i];
            let b = nombres[i + 1];
            let res = operateurs[i] === "+" ? a + b : a - b;

            nombres.splice(i, 2, res);
            operateurs.splice(i, 1);
        }

        operation = nombres[0].toString();
    } catch (error) {
        operation = "Erreur";
    }

    input.textContent = operation;
};

