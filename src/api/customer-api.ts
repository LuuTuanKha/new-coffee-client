import { ListResponse } from 'models';
import { Customer } from 'models';
import axiosClient from './axios-client';

const CustomerAPi = {
  getAll(): Promise<ListResponse<Customer>> {
    const url = '/customers';
    return axiosClient.get(url);
  },
  add(data: Customer): Promise<Customer> {
    const url = '/customers';
    return axiosClient.post(url, data);
  },
  update(data: Customer): Promise<Customer> {
    const url = '/customers';
    return axiosClient.patch(url, data);
  },

  getById(id: string): Promise<Customer> {
    const url = `/customers/${id}`;
    return axiosClient.get(url);
  },
  remove(id: string): Promise<any> {
    const url = `/customers/${id}`;
    return axiosClient.delete(url);
  },
};

export default CustomerAPi;
