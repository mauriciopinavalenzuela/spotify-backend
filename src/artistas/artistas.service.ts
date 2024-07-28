import { Injectable } from '@nestjs/common';
import { Artista } from 'src/models/artista'; 

@Injectable()
export class ArtistasService {
    private artistas: Artista[] = [];

    constructor() {
        this.artistas.push(
            new Artista(
                1,
                'Luis Fonsi',
                'Cantante y compositor puertorriqueño',
                'Solista',
                'Puerto Rico',
                ['Pop', 'Reguetón'],
                30000000 
            )
        );
    }

    crearArtista(artista: Artista): Artista {
        for (const a of this.artistas) {
            if (a.nombre === artista.nombre) {
                return null;
            }
        }

        artista.id = this.artistas.length + 1;
        this.artistas.push(artista);
        return artista;
    }

    obtenerTodosLosArtistas(): Artista[] {
        return this.artistas;
    }
}
