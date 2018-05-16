import {Injectable} from "@nestjs/common/interfaces";

@Injectable()
export class UsuarioService{
    usuario: Usuario[] =[];

    crearUsuario(usuario:Usuario): Usuario{
        this.usuario.push(usuario);
        return usuario;
    }

    mostrarUsuario(): Usuario[]{
        return this.usuario;
    }


}

interface Usuario {
    nombre:String,
    apellido:String,
    edad:number

}