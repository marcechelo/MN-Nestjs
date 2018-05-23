import {Body, Controller, Get, HttpCode, Post, Req} from "@nestjs/common";
import {Res} from "@nestjs/common/utils/decorators/route-params.decorator";
import {UsuarioService} from "./usuario.service";
import {UsuarioPipe} from "./Pipes/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";

@Controller('Usuario')
export class UsuarioController{
    usuario ={
        nombre: 'marcelo',
        apellido: 'nieto',
        edad: 23
    };

    usuarios = [];

    constructor(private _usuarioService:UsuarioService){

    }

    @HttpCode(202)
    @Get('mostrar')
    mostrarUsuario(@Res() response){
        const usuarios= this._usuarioService.mostrarUsuario();
        return response.send(usuarios);
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req() request,@Res() response){
        return response.status(200).send(this.usuarios);
    }

    @Post('crearUsuario')
    crearUsuario(@Body(new UsuarioPipe(USUARIO_SCHEMA)) nuevoUsuario){
        this._usuarioService.crearUsuario(nuevoUsuario);
        return nuevoUsuario;
    }
}