import React, { Component } from 'react'
import { Layout} from 'antd';
import { ProductPage } from 'features/product/pages/ProductPage';
import { OrderPage } from 'features/order/pages/OrderPage';

interface Props {
    layoutSelectedIndex: number
    
}

const MainLayout = (props: Props) => {
    const {layoutSelectedIndex} = props
    const { Content } = Layout
    const layoutList: any[] = [<OrderPage/>,<ProductPage/>,<ProductPage/>,<ProductPage/>,<ProductPage/>,<ProductPage/>, ]
    return (
        <Layout style={{ padding: '0px 10px 10px' }}>
            <Content
              className="site-layout-background"
             
            >
              <div style={{minHeight: '600px',backgroundColor:'white'}} className="">
                  {layoutList[layoutSelectedIndex]}
              </div>
            </Content>
          

          </Layout>
    )
}

export default MainLayout
