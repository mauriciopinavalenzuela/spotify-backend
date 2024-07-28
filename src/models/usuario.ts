export class Usuario {
  public id: number;
  public nombreUsuario: string;
  public nombre: string;
  public email: string;
  public password: string;

  constructor(
      id: number,
      nombreUsuario: string,
      nombre: string,
      email: string,
      password: string
  ) {
      this.id = id;
      this.nombreUsuario = nombreUsuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
  }
}
