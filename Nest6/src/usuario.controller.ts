import {Body, Controller, Get, HttpCode, Post, ReflectMetadata, Req, UseGuards} from "@nestjs/common";
import {Res} from "@nestjs/common/utils/decorators/route-params.decorator";
import {UsuarioService} from "./usuario.service";
import {UsuarioPipe} from "./Pipes/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";
import {CrearUsuarioGuard} from "./guards/crear-usuario.guard";

@Controller('Usuario')
@UseGuards(CrearUsuarioGuard)

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
    @ReflectMetadata('permisos', {permisos:'publico', roles:['usuario','administrador']})
    mostrarUsuario(@Res() response){
        const usuarios= this._usuarioService.mostrarUsuario();
        return response.send(usuarios);
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req() request,@Res() response){
        return response.status(200).send(this.usuarios);
    }

    @Post('crearUsuario')
    @ReflectMetadata('permisos', ['privado'])
    crearUsuario(@Body(new UsuarioPipe(USUARIO_SCHEMA)) nuevoUsuario){
        this._usuarioService.crearUsuario(nuevoUsuario);
        return nuevoUsuario;
    }
}