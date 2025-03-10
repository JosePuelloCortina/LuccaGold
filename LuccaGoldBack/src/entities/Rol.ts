import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuario } from './Usuario';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  nombre!: string;

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuarios!: Usuario[];
}