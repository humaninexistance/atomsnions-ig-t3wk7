function charge(){
  var charge = Number(document.getElementById("proton").value)-Number(document.getElementById("electron").value);
  console.log("the net charge of the atom/ion is " + charge);
}

function atom(){
  var charge = Number(document.getElementById("proton").value)-Number(document.getElementById("electron").value);
  if ((local)var charge = 0){
    var atomorion = atom;
  } else {
    if ((local)var charge > 0){
      var atomorion = positive ion;
    } else {
      if((local)var charge < 0){
        var atomorion = negative ion;
      } else {
        var atomorion = "i don't know, ask sanika";
      }
    }
  }
  console.log("this is an " + atomorion);
}

function mass(){
  var mass = Number(document.getElementById("proton").value)+Number(document.getElementById("neutron").value);
  console.log("the mass of this atom or ion is " + mass);
}
