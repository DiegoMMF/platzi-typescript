// * TIPOS PRIMITIVOS

import { EnumType, TupleType } from "typescript";

let a: number;
let b: boolean;
let c: string;
let d: void;
let e: never;
let f: null;
let g: undefined;
let h: any;
let i: TupleType;
let j: Object;
let k: Array<any>;
let l: EnumType;

let phone: number;          // number explicito
phone = 54234567;
phone = 'hola';

let phoneNumber = 54234567; // number inferido
phone = 1;
phoneNumber = true;         // error en tiempo de compilación

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
isUserPro = 10;             // error en tiempo de compilación
isPro = true;
isPro = 1;                  // error en tiempo de compilación

let username: string = 'Diego';
username = "Luis";
username = true;            // error en tiempo de compilación

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

// * Números hexadecimales, binarios y octales
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// * Void

// Tipo explicito con any
function showInfo(user: any): any {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola';
}

showInfo({id: 1, username: 'luixaviles', firstName: 'Luis'});

// Tipo Inferido
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({id: 1, username: 'luixaviles', firstName: 'Luis'});

// tipo void, como tipo de dato en variable
let unusable: void;
unusable = null;        // error si tscondig.json { ..., strict: true, ... }
unusable = undefined;

// Tipo: Never

function handleError(code: number, message: string): never{

    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch (error) {
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while(true) {
        sum++;
    }
    // return sum;
}

sumNumbers(10);
// ciclo infinito, programa nunca termina