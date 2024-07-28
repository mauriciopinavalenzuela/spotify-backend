import { Injectable } from '@nestjs/common';
import { Cancion } from './cancion';

export class Artista{
    constructor(
        public id: number,
        public nombre: string,
        public biografia: string,
        public tipo: string,
        public pais: string,
        public generoMusical: string[],
        public oyentesMensuales: number,
      ) {}
}

@Injectable()
export class CancionesService {
    private canciones: Cancion[] = [];

    constructor() {
        this.canciones.push(
            new Cancion(
                1,
                'Gata Only',
                230
            ));
    }

    crearCancion(cancion: Cancion): Cancion | null {
        let canciónExistente = false;

        for (const c of this.canciones) {
            if (c.titulo === cancion.titulo && c.artista === cancion.artista) {
                canciónExistente = true; // Canción ya existe
                break;
            }
        }

        if (canciónExistente) {
            // Si la canción ya existe, retorna null
            return null;
        } else {
            // Si la canción no existe, asigna un nuevo ID y agrega la canción a la lista
            cancion.id = this.canciones.length + 1;
            this.canciones.push(cancion);
            return cancion;
        }
    }

    obtenerTodasLasCanciones(): Cancion[] {
        return this.canciones;
    }
}
