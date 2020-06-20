import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  bredFor: string;

  @Column({ nullable: true })
  breedGroup: string;

  @Column({ type: 'jsonb', nullable: true })
  height: object;

  @Column({ nullable: true })
  lifeSpan: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  origin: string;

  @Column({ nullable: true })
  temperament: string;

  @Column({ type: 'jsonb', nullable: true })
  weight: object;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
