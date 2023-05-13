// * OBJECTS * \\

// "Object" es la instancia de la clase Object de JS

// "object" es el tipo de TS para valores no primitivos

// Con "object" no se puede acceder a las propieda// Type: object

let user: object;
user = {}; // Object

user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};

console.log('user', user);
// console.log('user.id', user.id)

// Object vs object(Clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};

const isInstance = user instanceof Object; // clase Object JavaScript

console.log('isInstance', isInstance);
console.log('myObj.username', myObj.username);

// * ENUMS * \\

// Orientacion para Fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panomara = 3;

enum PhotoOrientation {
    Landscape = 0, // 0
    Portrait = 1, // 1
    Square = 2, // 2
    Panorama = 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait, // 11
    Square, // 12
    Panorama // 13
}
console.log('portrait', PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const country: Country = Country.Colombia;
console.log('country', country);

