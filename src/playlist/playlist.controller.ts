import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PlaylistsService } from './playlist.service';
import { Playlist } from 'src/models/playlist'; 

@Controller('playlists')
export class PlaylistsController {
    constructor(private readonly playlistsService: PlaylistsService) {}

    @Post()
    crearPlaylist(
        @Body() playlist: Playlist, 
        @Res() response: Response
    ) {
        const nuevaPlaylist = this.playlistsService.crearPlaylist(playlist);

        if (nuevaPlaylist) {
            response.status(201).send(nuevaPlaylist);
        } else {
            response.status(400).send({ error: 'La playlist ya existe' });
        }
    }

    @Get()
    obtenerTodasLasPlaylists(@Res() response: Response) {
        const playlists = this.playlistsService.obtenerTodasLasPlaylists();
        response.status(200).send(playlists);
    }
}
