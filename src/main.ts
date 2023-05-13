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
