import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { CancionesService } from './canciones.service';
import { Cancion } from 'src/models/cancion'; 

@Controller('canciones')
export class CancionesController {
    constructor(private readonly cancionesService: CancionesService) {}

    @Post()
    crearCancion(
        @Body() cancion: Cancion, 
        @Res() response: Response
    ) {
        const nuevaCancion = this.cancionesService.crearCancion(cancion);
        
        if (nuevaCancion) {
            response.status(201).send(nuevaCancion);
        } else {
            response.status(400).send({ error: 'La canción ya existe' });
        }
    }

    @Get()
    obtenerTodasLasCanciones(@Res() response: Response) {
        const canciones = this.cancionesService.obtenerTodasLasCanciones();
        response.status(200).send(canciones);
    }
}
