import { Injectable } from '@nestjs/common';
import { Cancion } from 'src/models/cancion';

@Injectable()
export class CancionesService {
    private canciones: Cancion[] = [];

    constructor() {
        this.canciones.push(
            new Cancion(
                1,
                'Loco Vox',
                'Locomia', 
                327 
            )
        );
    }

    crearCancion(cancion: Cancion): Cancion {
        let canciónExistente = false;
        
        for (const c of this.canciones) {
            if (c.titulo === cancion.titulo && c.artista === cancion.artista) {
                canciónExistente = true; 
                break;
            }
        }

        if (canciónExistente) {
            return null;
        } else {
            
            cancion.id = this.canciones.length + 1;
            this.canciones.push(cancion);
            return cancion;
        }
    }

    obtenerTodasLasCanciones(): Cancion[] {
        return this.canciones;
    }
}
