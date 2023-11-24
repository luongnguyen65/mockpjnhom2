import { memo, useState } from 'react'
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineUser, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu, AiOutlinePhone } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { formatter } from 'utils/formater';
import { ROUTERS } from 'utils/router';


const Header = () => {
    const [isShowCategories, setShowCategories] = useState(false);


    const [menus] = useState([
        {
            name: "Home",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Shop",
            path: ROUTERS.USER.SHOP,
        },
        {
            name: "Brand",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Xiaomi",
                    path: "",
                },
                {
                    name: "Iphone",
                    path: "",
                },
                {
                    name: "Samsung",
                    path: "",
                },
            ]
        },
        {
            name: "Posts",
            path: ROUTERS.USER.POST,
        },
        {
            name: "Contact",
            path: ROUTERS.USER.CONTACT,
        },

    ])



    return (<>
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className='col-6 header_top_left'>
                        <ul>
                            <li><AiOutlineMail />team2@gmail.com</li>
                            <li>Free ship to {formatter(30000)}</li>
                        </ul>
                    </div>
                    <div className='col-6 header_top_right'>
                        <ul>
                            <Link to={""} >
                                <li><AiOutlineFacebook /></li>
                            </Link>
                            <Link to={""}>
                                <li><AiOutlineInstagram /></li>
                            </Link>
                            <Link to={""}>
                                <li><AiOutlineTwitter /></li>
                            </Link>
                            <Link to={""}>
                                <li><AiOutlineLinkedin /></li>
                            </Link>
                            <Link to={""}>
                                <li><AiOutlineUser /></li>
                            </Link>
                            <span>SignIn</span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className='header_logo'>
                        <h1>Team 2 Shop</h1>
                    </div>
                </div>
                <div className="col-xl-6">
                    <nav className="header_menu">
                        <ul>
                            {
                                menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                        {
                                            menu.child && (
                                                <ul className="header_menu_dropdown">
                                                    {
                                                        menu.child.map((childItem, childKey) => (
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childItem.path}>{childItem.name}</Link>
                                                            </li>

                                                        ))
                                                    }

                                                </ul>
                                            )
                                        }
                                    </li>
                                )
                                )
                            }

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row categories_container">
                <div className="col-lg-3 categories">
                    <div className="categories_all" onClick={() => setShowCategories(!isShowCategories)}><AiOutlineMenu /> List Product</div>
                    {isShowCategories && (
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to={"#"}>Xiaomi</Link>
                            </li>
                            <li>
                                <Link to={"#"}></Link>
                            </li>
                            <li>
                                <Link to={"#"}>3</Link>
                            </li>
                            <li>
                                <Link to={"#"}>4</Link>
                            </li>
                            <li>
                                <Link to={"#"}>5</Link>
                            </li>
                            <li>
                                <Link to={"#"}>6</Link>
                            </li>
                        </ul>
                    )}

                </div>
                <div className="col-lg-9 search_container">
                    <div className="search">
                        <div className="search_form">
                            <form>
                                <input type="text" placeholder="What do you want to find?" />
                                <button type="submit">Search</button>
                            </form>

                        </div>
                        <div className="search_phone">
                            <div className="search_phone_icon">
                                <AiOutlinePhone />
                            </div>
                            <div className="search_phone_text"></div>
                            <p>039.8018.663</p>
                            <span>Support 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
export default memo(Header);