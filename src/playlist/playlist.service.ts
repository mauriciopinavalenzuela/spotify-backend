import { Injectable } from '@nestjs/common';
import { Playlist } from 'src/models/playlist'; 

@Injectable()
export class PlaylistsService {
    private playlists: Playlist[] = []; 

    constructor() {
        
        this.playlists.push(
            new Playlist(
                1, 
                'Mi Playlist Favorita', 
                [], 
                new Date(), 
                false 
            )
        );
    }

    crearPlaylist(playlist: Playlist): Playlist {
        
        for (const p of this.playlists) {
            if (p.nombre === playlist.nombre) {
                
                return p;
            }
        }

        playlist.identificador = this.playlists.length + 1;
        this.playlists.push(playlist);
        return playlist;
    }

    obtenerTodasLasPlaylists(): Playlist[] {
        return this.playlists;
    }
}
