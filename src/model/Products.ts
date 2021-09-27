import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
    
    @Column()
    category: string;
}