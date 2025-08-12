function charge(){
  var charge = Number(document.getElementById("proton").value)-Number(document.getElementById("neutron").value);
  console.log(charge);
}

function atom(){
  var charge = Number(document.getElementById("proton").value)-Number(document.getElementById("neutron").value);
  if (local)var charge = 0
}