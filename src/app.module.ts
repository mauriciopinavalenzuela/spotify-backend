import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistController } from './playlist/playlist.controller';
import { PlaylistService } from './playlist/playlist.service';

@Module({
  imports: [],
  controllers: [AppController, PlaylistController],
  providers: [AppService, PlaylistService],
})
export class AppModule {}
