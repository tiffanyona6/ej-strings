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

// Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".
const generateWords = (word1, word2, word3) => {

  const word1R1 = Math.random() * word1.length;
  const word1R2 = Math.random() * word1.length;
  const word2R1 = Math.random() * word2.length;
  const word2R2 = Math.random() * word2.length;
  const word3R1 = Math.random() * word3.length;
  const word3R2 = Math.random() * word3.length;
  const word =
    word1.charAt(word1R1) +
    word1.charAt(word1R2) +
    word2.charAt(word2R1) +
    word2.charAt(word2R2) +
    word3.charAt(word3R1) +
    word3.charAt(word3R2);
    return word;
  };
  console.log(generateWords('Playa', 'Macarroni', 'Salada'));

  //Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".
  const userDomain = email => {
    const at = email.indexOf('@');
    const user = email.substring(0, at);
    const domain = email.substring(at + 1);
    return `El usuario es ${user} y el dominio es ${domain}`;
  };
  
  const emailReturn = userDomain('lunaki@gmail.com');
  console.log(emailReturn);

  //Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.

  const printWord = word1 => {
    const printWord = Math.floor(Math.random()* word1.lenght);
 console.log(word1.charAt(printWord));

  };

  printWord('Supercalifragilisticoespialidoso')

  //Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs
  const upperLower = word => {
    if (word.length > 5) {
      console.log(
        `Solo se aceptan palabras de 5 letras`
      );
    } else {
      console.log(
        word.charAt(0).toLowerCase() +
          word.charAt(1).toLowerCase() +
          word.charAt(2).toUpperCase() +
          word.charAt(3).toUpperCase() +
          word.charAt(4).toLowerCase()
      );
    }
  };
  
  upperLower('adios');

  //Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".

  const generateUser =(name, surname) => {
    console.log (name.charAt(0) + surname + Math.floor (Math.random()*101+1));

  };

  generateUser ('tiffany', 'oña');