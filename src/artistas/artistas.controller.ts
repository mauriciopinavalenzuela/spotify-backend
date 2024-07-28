import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ArtistasService } from './artistas.service';

@Controller('artistas')
export class ArtistasController {
    constructor(private readonly artistasService: ArtistasService) {}

    @Get()
    obtenerTodosLosArtistas(@Res() response: Response) {
        const artistas = this.artistasService.obtenerTodosLosArtistas();
        response.status(200).send(artistas);
    }

    @Post()
    crearArtista(
        @Body() artista: Artista, 
        @Res() response: Response
    ) {
        const nuevoArtista = this.artistasService.crearArtista(artista);

        if (nuevoArtista) {
            response.status(201).send(nuevoArtista);
        } else {
            response.status(400).send({ error: 'El artista ya existe' });
        }
    }
}
