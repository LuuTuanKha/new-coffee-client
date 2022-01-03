import { Button, Table, Tag } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Loading } from 'components/Common/Loading';
import { Customer } from 'models';
import React, { useEffect } from 'react';
import { customerActions } from '../customerSlice';



export const ListCustomerPage = () => {
    const dispatch = useAppDispatch();
    const listCustomer = useAppSelector((state) => state.customer.list);
    const isLoading = useAppSelector((state) => state.customer.loading);
    useEffect(() => {
      dispatch(customerActions.fetchCustomerList());
    }, []);
    const columns: any = [
        
        
        {
          title: 'Tên khách hàng',
          dataIndex:  'name',
          key: 'name',
          render: (text: string) => <strong>{text}</strong>,
        },
    
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          // width: '20%'
        },
        {
          title: 'Số điện thoại',
          dataIndex: 'phone',
          key: 'phone',
          // width: '20%'
        },
        {
          title: 'Địa chỉ',
          dataIndex: 'address',
          key: 'address',
          // width: '20%'
        },
        
        {
          title: 'Chi tiết',
          key: 'lastOnline',
          render: (obj: Customer) => {
            return (
              <div>
                {' '}
                <Button
                  icon={<i className="fas fa-user-circle"></i>}
                  type="primary"
                  // onClick={() => showModal(obj)}
                >
                  &nbsp;&nbsp;Chi tiết
                </Button>
              </div>
            );
          },
        },
      ];
    return (
        <div>
             { isLoading === true ? <Loading/> :
        <Table
          rowKey="_id"
          columns={columns}
          dataSource={listCustomer}
          pagination={false}
          scroll={{ y: 800 }}
        />
      }
        </div>
    )
}
