import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Carousel, Input } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import '../Reuse/List.css'
import { Content, Footer } from 'antd/es/layout/layout';


const { Search } = Input;

const onSearch = (value) => console.log(value);

const Navbar = () => {
  return (
    <div>
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
        <div className='container1'>
          <div className='logocontainer'>
            <h1>INSDI</h1>
          </div>
          <nav>
            <div className='list'>
              <div className="search-container">
                <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  enterButton
                  className="custom-search"
                  style={{ width: '390px', maxWidth: '350px', paddingTop: '15px', }}
                />
              </div>



              <NavLink to="/login" className="listItem" activeClassName="active">
                <UserOutlined className="icon" />
                <span className="text">Login</span>
              </NavLink>
              <NavLink to="/cart" className="listItem" activeClassName="active">
                <ShoppingCartOutlined className="icon" />
                <span className="text">Cart</span>
              </NavLink>

            </div>
          </nav>
        </div>
      </header>
      <Content>

      </Content>
    </div>
  );
};

export default Navbar;

