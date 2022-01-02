import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, NotificationOutlined, CommentOutlined, ControlOutlined } from '@ant-design/icons'
interface Props {
    onSelectedLayoutIndexChange : any
}

const LeftSlider = (props: Props) => {
    const {onSelectedLayoutIndexChange} = props
    const { Sider } = Layout
  const { SubMenu } = Menu

  const listIconOfSubMenu =[ <UserOutlined/>,<CommentOutlined />,<NotificationOutlined />,<ControlOutlined />]
  let subMenu = [{ key: "order", title: 'Hoá đơn', items: [{ key: 0, content: 'Tạo hoá đơn mới' },{ key: 1, content: 'Thông tin cá nhân' },{ key: 2, content: 'Danh sách hoá đơn' }] },
  { key: "products", title: 'Sản phẩm', items: [{ key: 3, content: 'Danh sách sản phẩm' }] },
]
  
    return (
        <Sider width={250} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['order']}
        style={{ height: '100%', borderRight: 0 }}
      >
       
        {
          subMenu.map((sub, index) => {
            return (
              <SubMenu key={sub.key} icon={listIconOfSubMenu[index]} title={sub.title}>
                {
                  sub.items.map((item, id) => {
                    return (
                      <Menu.Item key={item.key} onClick={()=>onSelectedLayoutIndexChange(item.key)}>{item.content}</Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu>
    </Sider>
    )
}

export default LeftSlider
