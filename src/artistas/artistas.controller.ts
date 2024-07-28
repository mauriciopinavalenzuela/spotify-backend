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
}
