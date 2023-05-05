// lisätään napin kuuntelijafunktio
document.querySelector("button.blog").addEventListener("click", addNote);

// haetaan dokumentin elementit
let body        = document.querySelector("body");
let user        = document.getElementById("name");
let checkbox    = document.getElementById("important");

function addNote() {

    //luodaan otsikko johon tulee nimikenttään syötetty teksti (eli nimi) + aikaleima
    let h3          = document.createElement("h3");
    let h2          = document.createElement("h2");
    let now         = new Date();
    let date        = now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getFullYear();
    let time        = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    let timestamp   = date + " " + time;
    
    h3.textContent = user.value;
    h2.textContent = timestamp;
    h2.classList.add("timestamp");

    // itse viesti lisätään tekstinä p-elementtiin textareasta
    let viesti = document.getElementById("message");

    let p = document.createElement("p");
    p.textContent = viesti.value;
    p.classList.add("message");

    //Jos checkbox valittu, lisätään important -muotoilu
    if (checkbox.checked) {
        h3.classList.add("important");
    }
    
    // kaikki elementit uusina bodyn sisälle
    const contentDiv = document.getElementById("content");
    contentDiv.append(h3, h2, p, document.createElement("hr"));


    user.value      = "";
    viesti.value    = "";
    checkbox.checked  = false;
}