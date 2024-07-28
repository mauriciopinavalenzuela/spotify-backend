export class Artista {
  public id: number;
  public nombre: string;
  public biografia: string;
  public tipo: string;
  public pais: string;
  public generoMusical: string[];
  public oyentesMensuales: number;

  constructor(
      id: number,
      nombre: string,
      biografia: string,
      tipo: string,
      pais: string,
      generoMusical: string[],
      oyentesMensuales: number
  ) {
      this.id = id;
      this.nombre = nombre;
      this.biografia = biografia;
      this.tipo = tipo;
      this.pais = pais;
      this.generoMusical = generoMusical;
      this.oyentesMensuales = oyentesMensuales;
  }
}
