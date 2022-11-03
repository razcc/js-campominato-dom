// ^Variabili Globali
let difficolta;
let griglia = document.getElementById("areaDiGioco");
let playButtom = document.getElementById("playButtom");

// !Variabile se si perde e delle vincite
let areaVinciteGameOver = document.getElementById("areaVinciteGameOver");

let divPerdite = document.getElementById("gameOver");

let divVincite = document.getElementById("partiteVinte");



// ^Funzione per creare quadrato
function creazioneQaudrato(x) {
    const div = document.createElement("div");
    div.classList.add("quadrato");
    div.innerText = x;
    return div;
}



playButtom.addEventListener("click", function play() {


    // !Bomb
    let bombArray = [];
    let bomb = "";
    let contatoreVincite = 0;

    griglia.classList.remove("loading");

    divPerdite.innerText = "";
    divVincite.innerText = "";

    // ^Svuotamento dell'area di gioco
    griglia.innerHTML = "";

    // ^Input dal select per il tipo di difficolta
    difficolta = document.getElementById("dificultSelection").value;
    console.log(difficolta)



    if (difficolta == "easy") {

        // !Creazione di 16 bombe casuali e diverse fra loro EASY MODE
        while (bombArray.length < 16) {

            bomb = Math.floor((Math.random() * 100) + 1);
            if (bombArray.includes(bomb)) {
                // Niente
            }
            else {
                bombArray.push(bomb);
            }
        }
        console.log(bombArray)


        // ^Ciclo per creare il quadrato 100 volte
        for (let i = 0; i < 100; i++) {

            // ^Richiamo la creazione del quadrato e lo metto in una variabile
            let activeElement = creazioneQaudrato(i + 1);

            //^Rendo il quadrato creato cliccabile, e aggiungo la classe
            activeElement.addEventListener('click', function () {

                if (bombArray.includes(i + 1)) {
                    // *Aggiungo classe quadrato bomba
                    this.classList.toggle('quadratoBomba');
                    griglia.classList.add("loading");

                    // Vincite e GameOver

                    divPerdite.innerText = "GAMEOVER";
                    divVincite.innerText = `Partite vinte: ${contatoreVincite}`;



                }
                else {
                    // *Aggiungo classe
                    this.classList.toggle('quadratoSelezionato');
                    this.classList.toggle("loading");
                    contatoreVincite = contatoreVincite + 1;
                    console.log(`Hai vinto: ${contatoreVincite} volte`)

                }


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

        // !Creazione di 16 bombe casuali e diverse fra loro NORMAL MODE
        while (bombArray.length < 16) {

            bomb = Math.floor((Math.random() * 81) + 1);

            if (bombArray.includes(bomb)) {
            }
            else {
                bombArray.push(bomb);
            }
        }
        console.log(bombArray)

        // ^Ciclo per creare il quadrato 81 volte
        for (let i = 0; i < 81; i++) {

            // Creazione del quadrato
            let activeElement = creazioneQaudrato(i + 1);
            activeElement.classList.remove("quadrato");
            activeElement.classList.add("quadratoLevelNormal");

            // Rendo il quadrato cliccabile aggiungendogli la classe
            activeElement.addEventListener('click', function () {

                if (bombArray.includes(i + 1)) {
                    // *Aggiungo classe quadrato bomba
                    this.classList.toggle('quadratoBomba');
                    griglia.classList.add("loading");

                    // Vincite e GameOver
                    areaVinciteGameOver.append(divPerdite);
                    divPerdite.append("GAMEOVER");

                    divVincite.append(`Partite vinte: ${contatoreVincite}`);
                    areaVinciteGameOver.append(divVincite);
                }
                else {
                    // *Aggiungo classe
                    this.classList.toggle('quadratoSelezionato');
                    this.classList.toggle("loading");
                    contatoreVincite = contatoreVincite + 1;
                    console.log(contatoreVincite)

                }

                let numeroCliccato = this.innerText;
                console.log(numeroCliccato);

            })



            griglia.append(activeElement);
        }
        griglia.classList.add("customBorder");

    }
    else {
        // !Creazione di 16 bombe casuali e diverse fra loro HARD MODE
        while (bombArray.length < 16) {

            bomb = Math.floor((Math.random() * 49) + 1);

            if (bombArray.includes(bomb)) {
            }
            else {
                bombArray.push(bomb);
            }
        }
        console.log(bombArray)

        // ^Ciclo per creare il quadrato 49 volte
        for (let i = 0; i < 49; i++) {

            // Creazione del quadrato
            let activeElement = creazioneQaudrato(i + 1);
            activeElement.classList.remove("quadrato");
            activeElement.classList.add("quadratoLevelHard");

            // Rendo il quadrato cliccabile aggiungendogli la classe
            activeElement.addEventListener('click', function () {

                if (bombArray.includes(i + 1)) {
                    // *Aggiungo classe quadrato bomba
                    this.classList.toggle('quadratoBomba');
                    griglia.classList.add("loading");

                    // Vincite e GameOver
                    areaVinciteGameOver.append(divPerdite);
                    divPerdite.append("GAMEOVER");

                    divVincite.append(`Partite vinte: ${contatoreVincite}`);
                    areaVinciteGameOver.append(divVincite);
                }
                else {
                    // *Aggiungo classe
                    this.classList.toggle('quadratoSelezionato');

                    this.classList.toggle("loading");
                    contatoreVincite = contatoreVincite + 1;
                    console.log(contatoreVincite)
                }

                let numeroCliccato = this.innerText;
                console.log(numeroCliccato);

            })


            griglia.append(activeElement);
        }
        griglia.classList.add("customBorder");
    }



}

)

