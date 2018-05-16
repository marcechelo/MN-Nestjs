import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from "./app.controller";
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";
import {AppService} from "./app.service";
import {UsuarioService} from "./usuario.service";
import {LogMiddleware} from "./log.middleware";


@Module({
  imports: [],
  controllers: [AppController, UsuarioController,ParametrosController],
  providers: [AppService,UsuarioService],
})
export class AppModule implements NestModule {
    nombreAplicacion = 'EPN';

    configure(consumer: MiddlewareConsumer)
        : void {
        consumer
            .apply(LogMiddleware)
            .with(this.nombreAplicacion, 1989)
            .forRoutes(
                UsuarioController,
                AppController,
                ParametrosController
            )
        //.apply(OtroMiddleware)
        //.forRoutes(Otras rutas);
    }

}
