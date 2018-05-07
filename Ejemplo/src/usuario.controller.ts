import {Controller, Get, HttpCode, Post, Req} from "@nestjs/common";
import {Res} from "@nestjs/common/utils/decorators/route-params.decorator";

@Controller('Usuario')
export class UsuarioController{
    usuario ={
        nombre: 'marcelo',
        apellido: 'nieto',
        edad: 23
    };

    usuarios = [];

    @HttpCode(202)
    @Get('mostrar')
    mostrarUsuario(){
        return this.usuario;
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req() request,@Res() response){
        return response.status(200).send(this.usuarios);
    }

    @Post('crearUsuario')
    crearUsuario(@Req() request,@Res() response){
        const nuevoUsuario ={
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };
        this.usuarios.push(nuevoUsuario);

        return response.status(201).send(nuevoUsuario);
    }
}