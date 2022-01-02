import React, { Component } from 'react'
import { Layout} from 'antd';

interface Props {
    layoutSelectedIndex: number
    
}

const MainLayout = (props: Props) => {
    const {layoutSelectedIndex} = props
    const { Content } = Layout
    const layoutList: Component[] = [ ]
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
