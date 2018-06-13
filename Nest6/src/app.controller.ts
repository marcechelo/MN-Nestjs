import {Get, Controller, ReflectMetadata, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {JwtGuard} from "./guards/jwt.guard";

@Controller()
@UseGuards(JwtGuard)
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @ReflectMetadata("nesecitaProteccion", false)
    root(): string {
        return this.appService.root();
    }

    @Get('hola')
    @ReflectMetadata("nesecitaProteccion", true)
    hola(): string {
        return 'Hola amigos';
    }
}
