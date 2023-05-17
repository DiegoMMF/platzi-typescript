export {}; // Evita conflictos 

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    public id: Date;
    public title: string;
    public orientation: PhotoOrientation;

    public constructor(
        id: Date,
        title: string,
        orientation: PhotoOrientation
    ) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id}, 
                 title: ${this.title}, 
                 orientation: ${this.orientation}]`;
    }
}

class Album {
    public id: Date;  // TS asigna public actúa por defecto
    public title: string;
    public pictures: Picture[];

    public constructor(id: Date, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const dateAsId = new Date();
console.log('dateAsId', dateAsId)
const album: Album = new Album(dateAsId, 'Personal Pictures');
const picture: Picture = new Picture(
    new Date(), 
    'Platzi session', 
    PhotoOrientation.Square
);
album.addPicture(picture);
console.log('album', album);

// Accediendo a los miembros publicos
picture.id = new Date(); // public
picture.title = 'Another title'; // public
album.title = 'Personal Activities';
console.log('album', album);
