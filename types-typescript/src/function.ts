// Crear una Fotografia
// function createPicture(title, date, size) {}
// function createPicture(title: any, date: any, size: any): void {}

type SquareSize = '100x100' | '500x500' | '1000x100';

// Usamos TS, definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize) {
//     // Se crea la Fotografia
//     console.log('create Picture using', title, date, size);
// }

// createPicture('My Birthday', '2020-03-10', '500x500');
// createPicture('Colombia Trip', '2020-03');

// Parametros Opcionales en funciones

function createPicture(title?: string, date?: string, size?: SquareSize) {
    // Se crea la Fotografia
    console.log('Picture created using', title, date, size);
}

createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '2020-03');
createPicture('Colombia Trip');
createPicture();

// Flat Array Function
const createPic = (title: string, date: string, size: SquareSize): object => (
    { title, date, size }
);

const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);

// 'void' & 'any'

// Tipo any explicito
function showInfo(user: any): any {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola';
}

showInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });

// Tipo any Inferido
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });

// Tipo: Never

function handleErrors(code: number, message: string): never {

    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleErrors(404, 'Not Found');
} catch (error) {
}

// Tipo de retorno con TypeScript
function handleError(code: number, message: string): never | string {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    } else {
        return 'An error has occurred';
    }
}


try {
    let result = handleError(200, 'OK'); // string
    console.log('result', result);
    result = handleError(404, 'error'); // never
    console.log('result', result);
} catch (error) {

}

function sumNumbers(limit: number): never {
    let sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}

// sumNumbers(10); // ciclo infinito, programa nunca termina


