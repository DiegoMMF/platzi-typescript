// ************************************************************************** \\

// * FUNCIONES con 'void', 'never' y 'any' * \\

// Tipo explicito con 'any'
function showInfo(user: any): any {
    console.log('User Info', user.id, user.username, user.firstName);
    return 'hola';
}

// showInfo({id: 1, username: 'luixaviles', firstName: 'Luis'});

// Tipo implicito con 'any'
function showInfo2(user: any) {
    return user;
}

// showInfo2({id: 1, username: 'luixaviles', firstName: 'Luis'});

// Tipo Inferido con 'void'
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

// showFormattedInfo({id: 1, username: 'luixaviles', firstName: 'Luis'});

// *  * \\

function handleError(code: number, message: string): never{

    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch (error) {
    // console.log('Hubo un error')
}

// bucle infinito: conviene explicitar 'never' para que TS no infiera 'void'
function sumNumbers(limit: number): never {
    let sum = 0;
    while(true) {
        sum++;
    }
    // return sum;
}

sumNumbers(10);
// ciclo infinito, programa nunca termina


