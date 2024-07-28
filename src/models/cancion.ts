export class Cancion {
  id: number;
  titulo: string;
  artista: string; 
  duracion: number;

  constructor(id: number, titulo: string, artista: string, duracion: number) {
      this.id = id;
      this.titulo = titulo;
      this.artista = artista;
      this.duracion = duracion;
  }
}
