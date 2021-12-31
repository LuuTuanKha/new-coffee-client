import React, { useEffect, useState } from 'react'
import { Layout} from 'antd';
import About from '../../pages/student/About';



const MainLayout = ({layoutSelectedIndex}) => {
 
    const { Content } = Layout
    const layoutList = [<About/> ]
    
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
