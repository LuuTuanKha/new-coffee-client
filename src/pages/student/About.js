
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'; import {
    Table, Tag, Button
} from 'antd';
import { add } from '../../redux/slice/productSlice';
const About = () => {
    const dispatch = useDispatch();
    const listProduct = useSelector(state => state.listProduct)
    const [isNeedRerender, setisNeedRerender] = useState(false)
    useEffect(() => {

    }, [isNeedRerender, dispatch])
    const listProductExport = listProduct.map(product =>{
        return (
            <div>{product}</div>
        )
    })
    return (
        <div className='row' >
            <div className='text-center' style={{ marginTop: "50px" }}>
                <strong style={{ fontSize: "130%" }}>Thông tin dự án</strong>
                <p>Demo hệ thống quản lý sinh viên, phòng chống XSS và áp dụng CORS</p>
            </div>
            {listProductExport}
            <Button
            onClick={() => dispatch(add(2))}
            >add product</Button>
        </div>
    )
}

export default About
