import {Get, Controller, ReflectMetadata, UseGuards, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {JwtGuard} from "./guards/jwt.guard";

@Controller()
@UseGuards(JwtGuard)
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    root(@Req() request, @Res() response) {
        response.set('x-frame-options','SAMEORIGIN');
        return response.send('Hello World!');
    }

    @Get('hola')
    @ReflectMetadata("nesecitaProteccion", true)
    hola(): string {
        return 'Hola amigos';
    }
}
