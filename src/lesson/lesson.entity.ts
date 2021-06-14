import { Column, Entity } from 'typeorm';
import { Field, ID } from '@nestjs/graphql';
import { ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  @Column()
  startDate: string;
  @Column()
  endDate: string;
}
