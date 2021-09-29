import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Categories } from "./Categories";

@Entity()
export class Games {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    display_name: string;
    
    @Column()
    price: number;
    
    @Column()
    total_rating: number;
    
    @Column()
    create_at: Date;

    @ManyToOne(()=> Categories, category => category.games)
    category: Categories
}