export class Cancion {
  public id: number;
  public nombre: string;
  public duracion: number;

  constructor(
      id: number,
      nombre: string,
      duracion: number
  ) {
      this.id = id;
      this.nombre = nombre;
      this.duracion = duracion;
  }
}
