import { Product } from '../../products/entities/index';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
    nullable: true,
  })
  email: string;

  @Column({
    type: 'text',
    select: false
  })
  password: string;

  @Column({
    type: 'text',
  })
  fullName: string;

  @Column({
    type: 'bool',
    default: true,
  })
  isActive: string;

  @Column({
    type: 'text',
    array: true,
    default: ['user'],
  })
  roles: string[];


  @OneToMany(()=> Product, (product) =>product.user

  )
  product: Product
  


  @BeforeInsert()
  checkFielBeforeInsert() {
    this.email = this.email.toLocaleLowerCase().trim();
  }

  @BeforeUpdate()
  checkFielBeforeUpdate() {
   this.checkFielBeforeInsert();
  }
  
  
}
