import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DogImages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  width: string;

  @Column({ nullable: true })
  height: string;

  @Column({ nullable: true })
  url: string;

  @Column()
  dogUserId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
