// * TIPOS PRIMITIVOS

let a: number;
let b: boolean;
let c: string;
let d: void;                // no regresa nada
let e: never;               // nunca regresa un valor
let f: null;                // nada - es subtipo de otros tipos
let g: undefined;           // indefinido - es subtipo de otros tipos
let h: any;                 // 
let i: [string, 1, boolean, Array<string>, {}];
let j: object;              
let k: Array<string>;
let k2: string[];
enum l {

}

let phone: number;          // number explicito
phone = 54234567;
phone = null;
phone = undefined;
// phone = 'hola';          // error

let phoneNumber = 54234567; // number inferido
phone = 1;
// phoneNumber = true;         // error en tiempo de compilación

let otherId;                // any INFERIDO: let sin asignación de valor
otherId = 1;
otherId = '1';
otherId = true;

let idUser: any;            // any explícito
idUser = 1; // number
idUser = '1'; // string

let isPro: boolean;         // boolean 
let isUserPro = false;      // Inferido
isUserPro = true;
// isUserPro = 10;             // error en tiempo de compilación
isPro = true;
// isPro = 1;                  // error en tiempo de compilación

let username: string = 'Diego';
username = "Luis";
// username = true;            // error en tiempo de compilación

let userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Maldini'}
    phone: ${phone}
    isPro: ${isPro}
`;

let surprise: any = 'hello typescript';
// surprise.sayHello();     // error en tiempo de EJECUCIÓN por ser any
const subcadena = surprise.substring(6);
console.log('subcadena', subcadena);

// ************************************************************************** \\

// * Números hexadecimales, binarios y octales
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// ************************************************************************** \\

// tipo void, como tipo de dato en variable
let unusable: void;
unusable = null;        // error si tscondig.json { ..., strict: true, ... }
unusable = undefined;

// 'null' & 'undefined' son subtipos de 'void'

// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // Error!

let otherVariable = null;
otherVariable = 'test';

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error

let otherUndefined = undefined;
otherUndefined = 1;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);

// Null y Undefined: Como subtipos

// --strictNullChecks
let albumName: string;

// albumName = null;
// albumName = undefined;



// *  * \\
// *  * \\
// *  * \\