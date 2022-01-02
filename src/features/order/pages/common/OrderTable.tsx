import { Button, Table } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { orderItemsActions } from 'features/order/orderItemsSlice';
import { OrderItem } from 'models';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {}
let locale = {
  emptyText: 'Chưa có sản phẩm nào được thêm vào',
};
export const OrderTable = (props: Props) => {
  const dispatch = useAppDispatch();
  const listOrderItems = useAppSelector((state) => state.orderItems.listItem);
  const totalPrice = useAppSelector((state) => state.orderItems.totalPrice);
  const onMinusOrderItemClick = (obj: OrderItem) => {
    if (obj.quantity === 1) {
      toast(
        <div>
          <div className="toast-custom__body">
            <div className="toast-custom__title">Số lượng không được dưới 1!</div>
            <div className="toast-custom__content">
              Vui lòng nhấn xoá nếu bạn muốn xoá sản phẩm <br /> khỏi hoá đơn.
            </div>
            {/* <div>            <a className="btn " style={{borderColor:"#1db954", backgroundColor:"#1db954"}}  href='https://accounts.spotify.com/authorize?client_id=aa81c8b08f9847ccb97d12ed03dccd34&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&scope=user-read-playback-state%20user-read-currently-playing%20user-read-private%20user-read-email%20user-follow-read%20streaming%20app-remote-control%20user-read-playback-position%20user-top-read%20user-read-recently-played%20playlist-modify-private%20playlist-read-collaborative%20playlist-read-private%20playlist-modify-public'  >SIGN IN</a></div> */}
          </div>
        </div>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true,
          className: 'toast-custom toast--danger',
          bodyClassName: 'toast-custom__body',
          autoClose: 5000,
        }
      );
    } else dispatch(orderItemsActions.minusQuantityOrderItem(obj));
  };
  const columns = [
    {
      title: 'STT',
      dataIndex: '_id',
      key: '_id',
      render: (text: string) => <strong>{text}</strong>,
      width: '12%',
    },
    {
      title: 'Sản phẩm',
      dataIndex: ['product', 'name'],
      key: 'name',
      render: (text: string) => <strong>{text}</strong>,
      width: '45%',
    },
    {
      title: 'Số lượng',
      dataIndex: '',
      key: '',
      render: (obj: OrderItem) => {
        return (
          <div className="row">
            <div className="col-3">
              <Button
                shape="circle"
                icon={<i className="fas fa-minus"></i>}
                type="primary"
                onClick={() => onMinusOrderItemClick(obj)}
              ></Button>
            </div>
            <div className="col-3 text-center">
              <strong>{obj.quantity}</strong>
            </div>
            <div className="col-3">
              <Button
                onClick={() => dispatch(orderItemsActions.plusQuantityOrderItem(obj))}
                shape="circle"
                icon={<i className="fas fa-plus"></i>}
                type="primary"
              ></Button>
            </div>
            <div className="col-3">
              <Button
                danger
                icon={<i className="fas fa-trash"></i>}
                type="primary"
                onClick={() => dispatch(orderItemsActions.deleteOrderItem(obj))}
              ></Button>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ paddingTop: '15px' }} className="col-5">
      <div className="text-center">
        <h4>HOÁ ĐƠN</h4>
      </div>
      <Table locale={locale}
        rowKey={'_id'}
        dataSource={listOrderItems}
        pagination={false}
        scroll={{ y: 350 }}
        columns={columns}
      />
      {/* <hr /> */}
      <br></br>
      <div>
        Tổng thành tiền:{' '}
        <strong style={{ fontWeight: 'bolder' }}>
          <h5>{totalPrice} VNĐ</h5>
        </strong>
        <div className="row text-center">
          <div className="col-6">
            <Button 
            onClick={()=> dispatch(orderItemsActions.destroyOrderItems())}
            danger icon={<i className="fas fa-trash"></i>} type="primary">
              {' '}
              &nbsp; &nbsp;Huỷ hoá đơn
            </Button>
          </div>
          <div className="col-6">
            <Button  icon={<i className="fas fa-trash"></i>} type="primary">
              {' '}
              &nbsp; &nbsp;Lưu hoá đơn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
