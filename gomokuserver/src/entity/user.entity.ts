import {Entity,Column,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    score: number

    @Column()
    isLogin: number;
}
