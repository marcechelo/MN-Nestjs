import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";

@Controller('auth')
export class AuthController {

    constructor (private _jwtService: JwtService){}

    @Post('login')
    login(@Body('username') username: string, @Body('password') password:string ){

        const enviarUsername = username;
        const enviarPassword = password;
        const enviarParametros = enviarPassword && enviarUsername;

        if (enviarParametros){
            if (username === 'adrianeguez' && password === '1234'){
                const payload ={username: username};
                const respuesta = {jwt: this._jwtService.emitirToken(payload)};
                return respuesta;
            } else{
                throw new BadRequestException({mensaje:'Credenciales invalidas'})
            }
        } else{
            throw new BadRequestException({mensaje:'No envio parametros'})
        }

    }

    @Post('verificarJWT')
    verificarJWT(@Body('jwt') jwt: string){
        const tieneParametros = jwt;

        if (tieneParametros){
            this._jwtService.verificarToken(jwt,(error,data)=>{
                if (error){
                    throw new BadRequestException({
                        mensaje: 'JWT invalido',
                        error: error})
                } else{
                    return{
                        mensaje:'ok',
                        data: data
                    }
                }
            })
        } else{
            throw new BadRequestException({mensaje: 'no envio jwt'})
        }
    }

}