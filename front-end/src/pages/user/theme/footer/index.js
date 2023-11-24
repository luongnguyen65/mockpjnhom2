import { memo } from 'react'
import "./style.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer_about">
                        <h1 className="footer_about_logo">
                            Team 2 Shop
                        </h1>
                        <ul>
                            <li>Address : 93 Cầu Bươu</li>
                            <li>Phone : 0398018663</li>
                            <li>Email : manhth99@gmail.com</li>
                        </ul>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer_widget">
                        <h6>Store</h6>
                        <ul>
                            <li>
                                <Link to="">Contact</Link>
                            </li>
                            <li>
                                <Link to="">Information about us</Link>
                            </li>
                            <li>
                                <Link to="">Business products</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="">Account information</Link>
                            </li>
                            <li>
                                <Link to="">Cart</Link>
                            </li>
                            <li>
                                <Link to="">Favorites</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer_widget">
                        <h6>Voucher</h6>
                        <p>Sign up to receive information here !</p>
                        <form action='#'>
                            <div>
                                <input type="text" placeholder="Your email..." />
                                <button type="submit" className="button_submit">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
};
export default memo(Footer);