import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, NotificationOutlined, CommentOutlined, ControlOutlined,OrderedListOutlined } from '@ant-design/icons'
interface Props {
    onSelectedLayoutIndexChange : any
}

const LeftSlider = (props: Props) => {
    const {onSelectedLayoutIndexChange} = props
    const { Sider } = Layout
  const { SubMenu } = Menu

  const listIconOfSubMenu =[ <OrderedListOutlined />,<i className="fas fa-wine-glass-alt"></i>,<UserOutlined/>,<CommentOutlined />,<NotificationOutlined />,<ControlOutlined />]
  let subMenu = [{ key: "orders", title: 'Hoá đơn', items: [{ key: 0, content: 'Tạo hoá đơn mới' },{ key: 1, content: 'Danh sách hoá đơn' },{ key: 2, content: 'Danh sách hoá đơn' }] },
  { key: "products", title: 'Sản phẩm', items: [{ key: 3, content: 'Danh sách sản phẩm' }] },
  { key: "customers", title: 'Khách hàng', items: [{ key: 4, content: 'Danh sách khách hàng' }] },
  { key: "employees", title: 'Nhân viên', items: [{ key: 5, content: 'Danh sách nhân viên' }] },
]
  
    return (
        <Sider width={250} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['orders']}
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
