import { Customer } from './customer';
import { OrderItem } from './order-item';

export interface Order {
  orderItems: OrderItem[];

  shippingAddress: String;

  address: String;

  status: String;

  totalPrice: number;

  customer: Customer;

  dateOrdered: string;
}
