import { Cancion } from "./cancion";

export class Playlist {
    public identificador: number;
    public nombre: string;
    public canciones: Cancion[];
    public fechaCreacion: Date;
    public esPrivada: boolean;

    constructor(
        identificador: number,
        nombre: string,
        canciones: Cancion[],
        fechaCreacion: Date,
        esPrivada: boolean
    ) {
        this.identificador = identificador;
        this.nombre = nombre;
        this.canciones = canciones;
        this.fechaCreacion = fechaCreacion;
        this.esPrivada = esPrivada;
    }
}
