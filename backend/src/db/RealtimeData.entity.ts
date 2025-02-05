//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('RealtimeData')
export class RealtimeDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  GameRound: string;

  @Column('date', { nullable: true })
  Timestamp: Date;

  @Column('text', { nullable: true })
  Data: string;

  @Column('text', { nullable: true })
  Analysis: string;
}
