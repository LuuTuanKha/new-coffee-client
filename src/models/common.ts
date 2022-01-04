import { Employee } from "./employee";

export interface PaginationParams {
  limit?: number;
  currentPage: number;
  totalPage: number;
}

export interface ListResponse<T> {
  data: T[];
  limit?: number;
  currentPage: number;
  totalPage: number;
}
export interface LoginResponseType{
  user: Employee;
  token: string

}

export interface FilterFormat {
  text: string;
  value: string;
}

export interface ListParams {
    _page: number;
    _limit: number;
    _sort: number;
    _order: 'asc' | 'desc';

    [ key : string] :any;
}