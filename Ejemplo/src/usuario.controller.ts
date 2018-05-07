import {Controller, Get, Req} from "@nestjs/common";
import {Res} from "@nestjs/common/utils/decorators/route-params.decorator";

@Controller('Usuario')
export class UsuarioController{
    usuario ={
        nombre: 'marcelo',
        apellido: 'nieto',
        edad: 23
    };

    @Get('mostrar')
    mostrarUsuario(@Req() request,@Res() response){
        return response.send(this.usuario);
    }
}