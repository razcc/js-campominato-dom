// ^Variabili Globali
let difficolta;
let griglia = document.getElementById("areaDiGioco");

// ^Funzione per creare quadrato
function creazioneQaudrato(x) {
    const div = document.createElement("div");
    div.classList.add("quadrato");
    div.innerText = x;
    return div;
}



function play() {
    // ^Input dal select per il tipo di difficolta
    difficolta = document.getElementById("dificultSelection").value;
    console.log(difficolta)

    // ^Svuotamento dell'area di gioco
    griglia.innerHTML = "";
    
    if (difficolta == "easy") {

        // ^Ciclo per creare il quadrato 100 volte
        for (let i = 0; i < 100; i++) {

            // ^Richiamo la creazione del quadrato e lo metto in una variabile
            let activeElement = creazioneQaudrato(i + 1);

            //^Rendo il quadrato creato cliccabile, e aggiungo la classe
            activeElement.addEventListener('click', function () {
                // *Aggiungo classe
                this.classList.toggle('quadratoSelezionato');

                // *Metto dentro una variabile il valore del quadrato e lo stampo a console
                let numeroCliccato = this.innerText;
                console.log(numeroCliccato);
            })

            //^ "Appendo" Metto dentro ala variabile griglia il quadrato creato con gia le modifiche al click
            griglia.append(activeElement);
        }
        griglia.classList.add("customBorder");

    }
    else if (difficolta == "normal") {

        // ^Ciclo per creare il quadrato 81 volte
        for (let i = 0; i < 81; i++) {

            // Creazione del quadrato
            let activeElement = creazioneQaudrato(i + 1);
            activeElement.classList.remove("quadrato");
            activeElement.classList.add("quadratoLevelNormal");

            // Rendo il quadrato cliccabile aggiungendogli la classe
            activeElement.addEventListener('click', function () {

                this.classList.toggle('quadratoSelezionato');

                let numeroCliccato = this.innerText;
                console.log(numeroCliccato);

            })


            griglia.append(activeElement);
        }
        griglia.classList.add("customBorder");
    }
    else {

        // ^Ciclo per creare il quadrato 49 volte
        for (let i = 0; i < 49; i++) {

            // Creazione del quadrato
            let activeElement = creazioneQaudrato(i + 1);
            activeElement.classList.remove("quadrato");
            activeElement.classList.add("quadratoLevelHard");

            // Rendo il quadrato cliccabile aggiungendogli la classe
            activeElement.addEventListener('click', function () {

                this.classList.toggle('quadratoSelezionato');

                let numeroCliccato = this.innerText;
                console.log(numeroCliccato);

            })


            griglia.append(activeElement);
        }
        griglia.classList.add("customBorder");
    }



}

