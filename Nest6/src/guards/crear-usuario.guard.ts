import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";

@Injectable()
export class CrearUsuarioGuard implements CanActivate{

    constructor(private readonly reflector:Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const cabecera = request.headers;


        const permisos = this.reflector.get<string[]>('permisos',context.getHandler());
        console.log('Permisos',permisos);


        console.log('contexto',context);
        console.log('cabeceras',request.headers);
        if (cabecera.hola ==="Mundo"){
            return true
        } else {
            return false;
        }
    }

}