//Variabelen
const knop = document.getElementById("magicwand");
let errors = [];
let resultaat;
let resultaat_betaling;


//functies

//controle leeg veld -> checkEmptyField(veld, melding)
function checkEmptyField(veld, melding) {
    if (veld ="") {
        errors.push('Het veld ${melding} is vereist.');
    }
    
}

//controle e-mailadres -> validateEmail(emailadres)
//https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
function ValidateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.value.match(validRegex)) {
      return true;
    } 
    else {  
      errors.push("E-mailadres is niet correct.");  
      return false;  
    }  
  }

//controle wachtwoord -> beide ingevuld. WW > 7 chars & WW=WW
//4 meldingen: 2 voor lege velden, 1 voor te kort, 1 voor niet gelijk
function validatePassword(wachtwoord, herhaalwachtoord) {
    if (wachtwoord = "") {
        errors.push("Het veld wachtwoord is vereist.");
    }
    else if (wachtwoord.Length < 8) {
        errors.push("Het wachtwoord moet langer zijn dan 7 tekens.");
    }
    if (herhaalwachtwoord = "") {
        errors.push("Het veld herhaal wachtwoord is vereist.");
    }

    if (wachtwoord != herhaalwachtwoord) {
        errors.push("Je wachtwoorden komen niet overeen.");
    }
}

//gebruikersnaam
function validateUsername(gebruikersnaam) {
    if (gebruikersnaam.length < 1)
    errors.push("De gebruikersnaam moet minstens één teken bevatten.")

    if (!/^[a-zA-Z0-9_.-]+$/.test(username)) 
    errors.push("De gebruikersnaam mag enkel letters, nummers of underscores bevatten.")

    if (/^[\.-]/.test(username)) 
    errors.push("De gebruikersnaam mag niet met een punt of koppelteken beginnen.")      
}

//domein emailadres


//controle betalingswijze -> validatePayment(veld)


//controle postcode -> checkPC(veld)
function checkPC(veld) {
    if (veld == "") {
        errors.push("Het veld postcode is vereist.");
    }
    else if (parseInt(veld)<1000 || parseInt(veld) >=10000) {
        errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.");
    }
}

//algemene voorwaarden
//https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
function validateConditions() {
    const checkbox = document.querySelector("algemenevoorwaarden");
   
    if (!algemenevoorwaarden.checked) {
    errors.push("Je moet de algemene voorwaarden accepteren.")
    }
}


//lijst errors of proficiat


  // eventlistner
knop.addEventListener("click", validateForm, false);

//validateform

