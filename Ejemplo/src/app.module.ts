import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";
import {UsuarioService} from "./usuario.service";

@Module({
  imports: [], //otros modulos
    providers: [UsuarioService],
  controllers: [AppController,UsuarioController,ParametrosController],
  components: [],
})
export class AppModule {}
