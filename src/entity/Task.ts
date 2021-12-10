import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

enum TaskStatus {
  DONE = "done",
  ACTIVE = "active",
  REMOVED = "removed",
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  title: string;

  @Column()
  desc: string;

  @Column({
    type: "enum",
    enum: TaskStatus,
    default: TaskStatus.ACTIVE,
  })
  status: TaskStatus;
}
