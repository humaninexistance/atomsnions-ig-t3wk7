console.log("script loaded!");

function darkmode() {
  const body = document.body;
  const button = document.getElementById("darkmodebutton");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    button.innerText = "we need light to see things it's basic science 💔💔";
  } else {
    button.innerText = "plunge into darkness";
  }
}

function charge() {
  const protons = Number(document.getElementById("protons").value);
  const electrons = Number(document.getElementById("electrons").value);
  const netCharge = protons - electrons;
  console.log("the net charge of the atom/ion is " + netCharge);
  document.getElementById("charge").innerText = netCharge;
}

function atom() {
  const protons = Number(document.getElementById("protons").value);
  const electrons = Number(document.getElementById("electrons").value);
  const netCharge = protons - electrons;
  
  let atomorion;
  if (netCharge === 0) {
    atomorion = "Atom";
  } else if (netCharge > 0) {
    atomorion = "Positive ion";
  } else if (netCharge < 0) {
    atomorion = "Negative ion";
  } else {
    atomorion = "I don't know, ask Sanika";
  }

  console.log("this is an " + atomorion);
  document.getElementById("atomorion").innerText = atomorion;
}

function mass() {
  const protons = Number(document.getElementById("protons").value);
  const neutrons = Number(document.getElementById("neutrons").value);
  const atomicMass = protons + neutrons;
  console.log("the mass of this atom or ion is " + atomicMass);
  document.getElementById("mass").innerText = atomicMass;
}

function element() {
  const proton = Number(document.getElementById("protons").value);
  let elements = [
    null,
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium",
    "Boron",
    "Carbon",
    "Nitrogen",
    "Oxygen",
    "Fluorine",
    "Neon",
    "Sodium",
    "Magnesium",
    "Aluminium",
    "Silicon",
    "Phosphorus",
    "Sulfur",
    "Chlorine",
    "Argon",
    "Potassium",
    "Calcium",
    "Scandium",
    "Titanium",
    "Vanadium",
    "Chromium",
    "Manganese",
    "Iron",
    "Cobalt",
    "Nickel",
    "Copper",
    "Zinc",
    "Gallium",
    "Germanium",
    "Arsenic",
    "Selenium",
    "Bromine",
    "Krypton",
    "Rubidium",
    "Strontium",
    "Yttrium",
    "Zirconium",
    "Niobium",
    "Molybdenum",
    "Technetium",
    "Ruthenium",
    "Rhodium",
    "Palladium",
    "Silver",
    "Cadmium",
    "Indium",
    "Tin",
    "Antimony",
    "Tellurium",
    "Iodine",
    "Xenon",
    "Caesium",
    "Barium",
    "Lanthanum",
    "Cerium",
    "Praseodymium",
    "Neodymium",
    "Promethium",
    "Samarium",
    "Europium",
    "Gadolinium",
    "Terbium",
    "Dysprosium",
    "Holmium",
    "Erbium",
    "Thulium",
    "Ytterbium",
    "Lutetium",
    "Hafnium",
    "Tantalum",
    "Tungsten",
    "Rhenium",
    "Osmium",
    "Iridium",
    "Platinum",
    "Gold",
    "Mercury",
    "Thallium",
    "Lead",
    "Bismuth",
    "Polonium",
    "Astatine",
    "Radon",
    "Francium",
    "Radium",
    "Actinium",
    "Thorium",
    "Protactinium",
    "Uranium",
    "Neptunium",
    "Plutonium",
    "Americium",
    "Curium",
    "Berkelium",
    "Californium",
    "Einsteinium",
    "Fermium",
    "Mendelevium",
    "Nobelium",
    "Lawrencium",
    "Rutherfordium",
    "Dubnium",
    "Seaborgium",
    "Bohrium",
    "Hassium",
    "Meitnerium",
    "Darmstadtium",
    "Roentgenium",
    "Copernicium",
    "Nihonium",
    "Flerovium",
    "Moscovium",
    "Livermorium",
    "Tennessine",
    "Oganesson",
  ];

  var element = elements[proton] || "I don't know, ask Sanika";

  console.log("this is a " + element + "atom/ion");
  document.getElementById("element").innerText = element;
}
