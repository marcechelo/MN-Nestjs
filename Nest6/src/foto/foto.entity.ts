import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {type} from "os";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('web_nieto_foto')
export class FotoEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column('text')
    url:string;

    @ManyToOne(type => UsuarioEntity, usuarioEntity => usuarioEntity.fotos)
    usuario: UsuarioEntity;

}