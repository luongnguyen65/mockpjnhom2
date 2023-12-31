import React from 'react';
import 'pages/productPage_css/listProduct.scss';
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';

function ListProduct({ id, name, manufactureName, price, color, image, categoryName}) {

    return (
        <Col lg={2} xl={3} md={2} sm={5}>
            <div className='product'>

                <div className="product_img">
                    <img className="product__img" src={image} alt="no_image" />
                </div>

                <p className="product__name">- Tên Sản Phẩm: {name}</p>
                <p className="product_name">- Nhà Sản Xuất: {manufactureName}</p>
                <p className="product_name">- Loại Sản Phẩm: {categoryName}</p>
                <p className="product_name">- Màu sắc: {color}</p>
                <p className="product_price">- Giá: {price} đ</p>
                <Link to={`/${id}`}><p className="product_link">* LINK CHI TIẾT</p></Link>
            </div>
        </Col>
    );
}

export default ListProduct;  