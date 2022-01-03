import { Button, Table, Tag } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Loading } from 'components/Common/Loading';
import { Employee } from 'models';
import React, { useEffect } from 'react';
import { employeeActions } from '../employeeSlice';



export const ListEmployeePage = () => {
    const dispatch = useAppDispatch();
    const listEmployee = useAppSelector((state) => state.employee.list);
    const isLoading = useAppSelector((state) => state.employee.loading);
    useEffect(() => {
      dispatch(employeeActions.fetchEmployeeList());
    }, []);
    
    const columns: any = [
        
        
        {
          title: 'Tên khách hàng',
          dataIndex:  'name',
          key: 'name',
          render: (text: string) => <strong> {text} </strong>,
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
          render: (obj: Employee) => {
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
          dataSource={listEmployee}
          pagination={false}
          scroll={{ y: 800 }}
        />
      }
        </div>
    )
}
