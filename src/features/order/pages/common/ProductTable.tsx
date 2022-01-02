import { Button, Table, Tag } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { orderItemsActions } from 'features/order/orderItemsSlice'
import { productActions } from 'features/product/productSlice'
import { Product } from 'models'
import React, { useEffect } from 'react'

interface Props {
    
}

export const ProductTable = (props: Props) => {
    const dispatch = useAppDispatch()
    const listProduct: Product[] = useAppSelector(state => state.product.list)
    useEffect(() => {
        dispatch(productActions.fetchProductList());

    }, [])
    const columns = [
        
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <strong>{text}</strong>,
                        width: '35%'

        },
        {
            title: 'Giá bán',
            dataIndex: 'price',
            key: 'price',
            width: '15%'
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
           
        },
        {
            title: 'Trạng thái',
            dataIndex: 'isFeatured',
            key: 'isFeatured',
            render:  (tag: boolean)=> {
                if (tag === false) return (<Tag color='red' >
                    {(tag + "").toUpperCase()}
                </Tag>)
                else return (<Tag color='green' >
                    {(tag + "").toUpperCase()}
                </Tag>)
            },
            width: '15%'
        },
        //  {
        //     title: 'Ngày tạo',
        //     dataIndex: 'dateCreated',
        //     key: 'dateCreated',
            
        // }, 
        {
            title: 'Thêm',
            key: 'lastOnline',
            render: (obj: Product) => {
                return <div> <Button icon={<i className="fas fa-plus"></i>} type="primary" 
                onClick={() => dispatch(orderItemsActions.addNewOrderItemToOrder({product: obj, quantity:1}))}
                 ></Button>

                </div>
            },
             width: '10%'
        }



    ]
    return (
        <div className='col-7'>
        <Table rowKey="_id" columns={columns} dataSource={listProduct} pagination={false} scroll={{ y: 550 }} />
        </div>
    )
}
