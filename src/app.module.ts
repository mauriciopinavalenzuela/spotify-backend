import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CancionesController } from './canciones/canciones.controller';
import { CancionesService } from './models/artista';

@Module({
  imports: [],
  controllers: [AppController, CancionesController],
  providers: [AppService, CancionesService],
})
export class AppModule {}
