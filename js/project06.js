// Array representing all 118 elements
const elements = [
  { name: "Hydrogen", symbol: "H", number: 1, group: "Nonmetal", gridArea: "1 / 1 / 2 / 2" },
  { name: "Helium", symbol: "He", number: 2, group: "Noble Gas", gridArea: "1 / 18 / 2 / 19" },
  { name: "Lithium", symbol: "Li", number: 3, group: "Alkali Metal", gridArea: "2 / 1 / 3 / 2" },
  { name: "Beryllium", symbol: "Be", number: 4, group: "Alkaline Earth Metal", gridArea: "2 / 2 / 3 / 3" },
  { name: "Boron", symbol: "B", number: 5, group: "Metalloid", gridArea: "2 / 13 / 3 / 14" },
  { name: "Carbon", symbol: "C", number: 6, group: "Nonmetal", gridArea: "2 / 14 / 3 / 15" },
  { name: "Nitrogen", symbol: "N", number: 7, group: "Nonmetal", gridArea: "2 / 15 / 3 / 16" },
  { name: "Oxygen", symbol: "O", number: 8, group: "Nonmetal", gridArea: "2 / 16 / 3 / 17" },
  { name: "Fluorine", symbol: "F", number: 9, group: "Halogen", gridArea: "2 / 17 / 3 / 18" },
  { name: "Neon", symbol: "Ne", number: 10, group: "Noble Gas", gridArea: "2 / 18 / 3 / 19" },
  { name: "Sodium", symbol: "Na", number: 11, group: "Alkali Metal", gridArea: "3 / 1 / 4 / 2" },
  { name: "Magnesium", symbol: "Mg", number: 12, group: "Alkaline Earth Metal", gridArea: "3 / 2 / 4 / 3" },
  { name: "Aluminum", symbol: "Al", number: 13, group: "Post-Transition Metal", gridArea: "3 / 13 / 4 / 14" },
  { name: "Silicon", symbol: "Si", number: 14, group: "Metalloid", gridArea: "3 / 14 / 4 / 15" },
  { name: "Phosphorus", symbol: "P", number: 15, group: "Nonmetal", gridArea: "3 / 15 / 4 / 16" },
  { name: "Sulfur", symbol: "S", number: 16, group: "Nonmetal", gridArea: "3 / 16 / 4 / 17" },
  { name: "Chlorine", symbol: "Cl", number: 17, group: "Halogen", gridArea: "3 / 17 / 4 / 18" },
  { name: "Argon", symbol: "Ar", number: 18, group: "Noble Gas", gridArea: "3 / 18 / 4 / 19" },
  { name: "Potassium", symbol: "K", number: 19, group: "Alkali Metal", gridArea: "4 / 1 / 5 / 2" },
  { name: "Calcium", symbol: "Ca", number: 20, group: "Alkaline Earth Metal", gridArea: "4 / 2 / 5 / 3" },
  { name: "Scandium", symbol: "Sc", number: 21, group: "Transition Metal", gridArea: "4 / 3 / 5 / 4" },
  { name: "Titanium", symbol: "Ti", number: 22, group: "Transition Metal", gridArea: "4 / 4 / 5 / 5" },
  { name: "Vanadium", symbol: "V", number: 23, group: "Transition Metal", gridArea: "4 / 5 / 5 / 6" },
  { name: "Chromium", symbol: "Cr", number: 24, group: "Transition Metal", gridArea: "4 / 6 / 5 / 7" },
  { name: "Manganese", symbol: "Mn", number: 25, group: "Transition Metal", gridArea: "4 / 7 / 5 / 8" },
  { name: "Iron", symbol: "Fe", number: 26, group: "Transition Metal", gridArea: "4 / 8 / 5 / 9" },
  { name: "Cobalt", symbol: "Co", number: 27, group: "Transition Metal", gridArea: "4 / 9 / 5 / 10" },
  { name: "Nickel", symbol: "Ni", number: 28, group: "Transition Metal", gridArea: "4 / 10 / 5 / 11" },
  { name: "Copper", symbol: "Cu", number: 29, group: "Transition Metal", gridArea: "4 / 11 / 5 / 12" },
  { name: "Zinc", symbol: "Zn", number: 30, group: "Transition Metal", gridArea: "4 / 12 / 5 / 13" },
  { name: "Gallium", symbol: "Ga", number: 31, group: "Post-Transition Metal", gridArea: "4 / 13 / 5 / 14" },
  { name: "Germanium", symbol: "Ge", number: 32, group: "Metalloid", gridArea: "4 / 14 / 5 / 15" },
  { name: "Arsenic", symbol: "As", number: 33, group: "Metalloid", gridArea: "4 / 15 / 5 / 16" },
  { name: "Selenium", symbol: "Se", number: 34, group: "Nonmetal", gridArea: "4 / 16 / 5 / 17" },
  { name: "Bromine", symbol: "Br", number: 35, group: "Halogen", gridArea: "4 / 17 / 5 / 18" },
  { name: "Krypton", symbol: "Kr", number: 36, group: "Noble Gas", gridArea: "4 / 18 / 5 / 19" },
  { name: "Rubidium", symbol: "Rb", number: 37, group: "Alkali Metal", gridArea: "5 / 1 / 6 / 2" },
  { name: "Strontium", symbol: "Sr", number: 38, group: "Alkaline Earth Metal", gridArea: "5 / 2 / 6 / 3" },
  { name: "Yttrium", symbol: "Y", number: 39, group: "Transition Metal", gridArea: "5 / 3 / 6 / 4" },
  { name: "Zirconium", symbol: "Zr", number: 40, group: "Transition Metal", gridArea: "5 / 4 / 6 / 5" },
  { name: "Niobium", symbol: "Nb", number: 41, group: "Transition Metal", gridArea: "5 / 5 / 6 / 6" },
  { name: "Molybdenum", symbol: "Mo", number: 42, group: "Transition Metal", gridArea: "5 / 6 / 6 / 7" },
  { name: "Technetium", symbol: "Tc", number: 43, group: "Transition Metal", gridArea: "5 / 7 / 6 / 8" },
  { name: "Ruthenium", symbol: "Ru", number: 44, group: "Transition Metal", gridArea: "5 / 8 / 6 / 9" },
  { name: "Rhodium", symbol: "Rh", number: 45, group: "Transition Metal", gridArea: "5 / 9 / 6 / 10" },
  { name: "Palladium", symbol: "Pd", number: 46, group: "Transition Metal", gridArea: "5 / 10 / 6 / 11" },
  { name: "Silver", symbol: "Ag", number: 47, group: "Transition Metal", gridArea: "5 / 11 / 6 / 12" },
  { name: "Cadmium", symbol: "Cd", number: 48, group: "Transition Metal", gridArea: "5 / 12 / 6 / 13" },
  { name: "Indium", symbol: "In", number: 49, group: "Post-Transition Metal", gridArea: "5 / 13 / 6 / 14" },
  { name: "Tin", symbol: "Sn", number: 50, group: "Post-Transition Metal", gridArea: "5 / 14 / 6 / 15" },
  { name: "Antimony", symbol: "Sb", number: 51, group: "Metalloid", gridArea: "5 / 15 / 6 / 16" },
  { name: "Tellurium", symbol: "Te", number: 52, group: "Metalloid", gridArea: "5 / 16 / 6 / 17" },
  { name: "Iodine", symbol: "I", number: 53, group: "Halogen", gridArea: "5 / 17 / 6 / 18" },
  { name: "Xenon", symbol: "Xe", number: 54, group: "Noble Gas", gridArea: "5 / 18 / 6 / 19" },
  // Lanthanides and actinides will go below the main table
  { name: "Lanthanum", symbol: "La", number: 57, group: "Lanthanide", gridArea: "8 / 3 / 9 / 4" },
  { name: "Cerium", symbol: "Ce", number: 58, group: "Lanthanide", gridArea: "8 / 4 / 9 / 5" },
  { name: "Praseodymium", symbol: "Pr", number: 59, group: "Lanthanide", gridArea: "8 / 5 / 9 / 6" },
  { name: "Neodymium", symbol: "Nd", number: 60, group: "Lanthanide", gridArea: "8 / 6 / 9 / 7" },
  { name: "Promethium", symbol: "Pm", number: 61, group: "Lanthanide", gridArea: "8 / 7 / 9 / 8" },
  { name: "Samarium", symbol: "Sm", number: 62, group: "Lanthanide", gridArea: "8 / 8 / 9 / 9" },
  { name: "Europium", symbol: "Eu", number: 63, group: "Lanthanide", gridArea: "8 / 9 / 9 / 10" },
  { name: "Gadolinium", symbol: "Gd", number: 64, group: "Lanthanide", gridArea: "8 / 10 / 9 / 11" },
  { name: "Terbium", symbol: "Tb", number: 65, group: "Lanthanide", gridArea: "8 / 11 / 9 / 12" },
  { name: "Dysprosium", symbol: "Dy", number: 66, group: "Lanthanide", gridArea: "8 / 12 / 9 / 13" },
  { name: "Holmium", symbol: "Ho", number: 67, group: "Lanthanide", gridArea: "8 / 13 / 9 / 14" },
  { name: "Erbium", symbol: "Er", number: 68, group: "Lanthanide", gridArea: "8 / 14 / 9 / 15" },
  { name: "Thulium", symbol: "Tm", number: 69, group: "Lanthanide", gridArea: "8 / 15 / 9 / 16" },
  { name: "Ytterbium", symbol: "Yb", number: 70, group: "Lanthanide", gridArea: "8 / 16 / 9 / 17" },
  { name: "Lutetium", symbol: "Lu", number: 71, group: "Lanthanide", gridArea: "8 / 17 / 9 / 18" },
  { name: "Actinium", symbol: "Ac", number: 89, group: "Actinide", gridArea: "9 / 3 / 10 / 4" },
  { name: "Thorium", symbol: "Th", number: 90, group: "Actinide", gridArea: "9 / 4 / 10 / 5" },
  { name: "Protactinium", symbol: "Pa", number: 91, group: "Actinide", gridArea: "9 / 5 / 10 / 6" },
  { name: "Uranium", symbol: "U", number: 92, group: "Actinide", gridArea: "9 / 6 / 10 / 7" },
  { name: "Neptunium", symbol: "Np", number: 93, group: "Actinide", gridArea: "9 / 7 / 10 / 8" },
  { name: "Plutonium", symbol: "Pu", number: 94, group: "Actinide", gridArea: "9 / 8 / 10 / 9" },
  { name: "Americium", symbol: "Am", number: 95, group: "Actinide", gridArea: "9 / 9 / 10 / 10" },
  { name: "Curium", symbol: "Cm", number: 96, group: "Actinide", gridArea: "9 / 10 / 10 / 11" },
  { name: "Berkelium", symbol: "Bk", number: 97, group: "Actinide", gridArea: "9 / 11 / 10 / 12" },
  { name: "Californium", symbol: "Cf", number: 98, group: "Actinide", gridArea: "9 / 12 / 10 / 13" },
  { name: "Einsteinium", symbol: "Es", number: 99, group: "Actinide", gridArea: "9 / 13 / 10 / 14" },
  { name: "Fermium", symbol: "Fm", number: 100, group: "Actinide", gridArea: "9 / 14 / 10 / 15" },
];
  
  const periodicTable = document.getElementById("periodic-table");
  const searchBar = document.getElementById("search-bar");
  const elementName = document.getElementById("element-name");
  const elementSymbol = document.getElementById("element-symbol");
  const elementNumber = document.getElementById("element-number");
  const elementGroup = document.getElementById("element-group");
  
  // Create periodic table
  function createPeriodicTable() {
    elements.forEach((element) => {
      const elementDiv = document.createElement("div");
      elementDiv.classList.add("element");
      elementDiv.textContent = element.symbol;
      elementDiv.dataset.name = element.name.toLowerCase();
      elementDiv.dataset.symbol = element.symbol.toLowerCase();
      elementDiv.dataset.number = element.number;
      elementDiv.dataset.group = element.group;
  
      elementDiv.addEventListener("click", () => displayElementDetails(element));
  
      periodicTable.appendChild(elementDiv);
    });
  }
  
  // Display element details
  function displayElementDetails(element) {
    // Highlight the selected element
    document.querySelectorAll(".element").forEach((el) => el.classList.remove("highlight"));
    const selectedElement = document.querySelector(`.element[data-number="${element.number}"]`);
    selectedElement.classList.add("highlight");
  
    // Highlight the group
    const group = element.group;
    document.querySelectorAll(".element").forEach((el) => {
      el.classList.remove("group-highlight");
      if (el.dataset.group === group) el.classList.add("group-highlight");
    });
  
    // Update the details panel
    elementName.textContent = element.name;
    elementSymbol.textContent = element.symbol;
    elementNumber.textContent = element.number;
    elementGroup.textContent = element.group;
  }
  
  // Search functionality
  function searchElements() {
    const query = searchBar.value.toLowerCase();
    document.querySelectorAll(".element").forEach((el) => {
      const name = el.dataset.name;
      const symbol = el.dataset.symbol;
      const number = el.dataset.number.toString();
  
      if (name.includes(query) || symbol.includes(query) || number.includes(query)) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  }
  
  // Initialize the table
  createPeriodicTable();
  searchBar.addEventListener("input", searchElements);
  