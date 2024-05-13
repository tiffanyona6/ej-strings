// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const funcionDeTiffany = (word) => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};

funcionDeTiffany("Tiffany");

const funcionTiffanyTernary = (word) => {
  word.length > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLowerCase());
};

const getConjugation = (verb) => {
  if (verb.endsWith("ar")) {
    return `El verbo ${verb} es de la primera conjugación`;
  }

  if (verb.endsWith("er")) {
    return `El verbo ${verb} es de la segunda conjugación`;
  }

  if (verb.endsWith("ir")) {
    return `El verbo ${verb} es de la tercera conjugación`;
  }
};

const twoVerbs = (verb1, verb2) => {
  const firstVerb = getConjugation(verb1);
  const secondVerb = getConjugation(verb2);
  console.log(`El ${firstVerb} y ${secondVerb}`);
};

twoVerbs('llorar', 'morir');


const extractTwoRandomLetters = word => {
   const randomNumber = Math.floor (Math.random () * word.lenght);

    }

    generateWord('lorena', 'movil' , 'isidro');