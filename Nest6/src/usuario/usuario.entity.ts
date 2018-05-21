import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FotoEntity} from "../foto/foto.entity";

@Entity('web_nieto_usuario')
export class UsuarioEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:50})
    nombre:string;

    @OneToMany(type => FotoEntity, fotoEntity => fotoEntity.usuarioId)
    fotos:FotoEntity[]

}