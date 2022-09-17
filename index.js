function ajoutForm() {
    let a = document.forms["Form"]["fnom"].value;
    let b = document.forms["Form"]["fprenom"].value;
    let c = document.forms["Form"]["fage"].value;
    let d = document.forms["Form"]["fdateN"].value;
    if (a == "" | b == "" | c == "" | d == ""  ) {
      alert("Remplir le champ");
      return false;
    }
  }
