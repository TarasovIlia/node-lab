import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Games } from "./Games";

@Entity()
export class Categories {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(()=> Games, games => games.category)
    games: Games[]
}