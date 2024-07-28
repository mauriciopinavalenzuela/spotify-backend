import { Injectable } from '@nestjs/common';
import { Artista } from 'src/models/artista';

@Injectable()
export class ArtistasService {
    private artistas: Artista[] = [];  

    obtenerTodosLosArtistas(): Artista[] {
        return this.artistas;
    }
}
