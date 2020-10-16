import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("orphanges")
export default class Orphanage {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  latitue: number;

  @Column()
  longitue: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;
}
