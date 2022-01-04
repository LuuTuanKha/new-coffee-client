import { Button, Input, Modal, Table, Form } from 'antd';
import CustomerAPi from 'api/customer-api';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Toast } from 'components/Common';
import { Loading } from 'components/Common/Loading';
import { Customer, Product } from 'models';
import React, { useEffect, useState } from 'react';
import { customerActions } from '../customerSlice';

export const ListCustomerPage = () => {
  const dispatch = useAppDispatch();
  const listCustomer = useAppSelector((state) => state.customer.list);
  const isLoading = useAppSelector((state) => state.customer.loading);

  //Add table
  const [isShowAddModal, setisShowAddModal] = useState(false);

  const handleCancelAddModal = () => {
    setisShowAddModal(false);
  };

  const onFormSubmitAddModal = async (product: Product) => {
    try {
      await CustomerAPi.add(product);
      Toast(
        'success',
        'Thêm khách hàng thành công!',
        'Khách hàng mới được tạo thành công. Bạn có thể xem lại trong danh sách khách hàng.'
      );
      dispatch(customerActions.fetchCustomerList());
      setisShowAddModal(false);
    } catch (error: any) {
      Toast('danger', 'Thêm khách hàng thất bại!', error.response.data.error);
    }

    console.log(product);
  };
  const footerOfAddModal = [
    <Button key="back" onClick={() => handleCancelAddModal()}>
      Thoát
    </Button>,

    <Button
      form="AddForm"
      icon={<i className="fas fa-save"></i>}
      type="primary"
      key="submit"
      htmlType="submit"
    >
      &nbsp;Thêm 
    </Button>,
  ];

  useEffect(() => {
    dispatch(customerActions.fetchCustomerList());
  }, [dispatch]);
  const columns: any = [
    {
      title: 'Tên khách hàng',
      dataIndex: 'name',
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
      {isLoading === true ? (
        <Loading />
      ) : (
        <div>
          <div className="text-end">
            <Button onClick={() => setisShowAddModal(true)} type="primary">
              Khách hàng mới
            </Button>
          </div>

          <Table
            rowKey="_id"
            columns={columns}
            dataSource={listCustomer}
            pagination={false}
            scroll={{ y: 800 }}
          />

          <Modal
            closable={false}
            style={{ top: 20 }}
            title={<strong>Thêm khách hàng:</strong>}
            visible={isShowAddModal}
            footer={footerOfAddModal}
          >
            <div>
              <Form
                id="AddForm"
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 20 }}
                layout="horizontal"
                onFinish={onFormSubmitAddModal}
              >
                <Form.Item
                  label="Tên :"
                  name="name"
                  rules={[{ required: true, message: 'Thuộc tính này là bắt buộc!' }]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email:"
                  name="email"
                  rules={[{ required: true, message: 'Thuộc tính này là bắt buộc!' }]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Mật khẩu:"
                  name="password"
                  rules={[{ required: true, message: 'Thuộc tính này là bắt buộc!' }]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label="Địa chỉ: "
                  name="address"
                  rules={[{ required: true, message: 'Thuộc tính này là bắt buộc!' }]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Số điện thoại:"
                  name="phone"
                  rules={[{ required: true, message: 'Thuộc tính này là bắt buộc!' }]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </Form>
            </div>
          </Modal>

        </div>
      )}
    </div>
  );
};
