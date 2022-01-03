import { Order, OrderResponse } from 'models';
import axiosClient from './axios-client';

const orderAPi = {
  getAll(): Promise<OrderResponse[]> {
    const url = '/orders';
    return axiosClient.get(url);
  },
  add(data: Order): Promise<Order> {
    const url = '/orders';
    return axiosClient.post(url, data);
  },
  update(data: Order): Promise<Order> {
    const url = '/orders';
    return axiosClient.patch(url, data);
  },

  getById(id: string): Promise<Order> {
    const url = `/orders/${id}`;
    return axiosClient.get(url);
  },
  remove(id: string): Promise<any> {
    const url = `/orders/${id}`;
    return axiosClient.delete(url);
  },
};

export default orderAPi;
