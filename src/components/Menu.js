import { Link } from "react-router-dom";
import logo from "../assets/Image/z5663013957295_cd1b11c394012fe7586f49318113f506.jpg"
import banner from "../assets/Image/istockphoto-1299616187-612x612.jpg"
import banner2 from "../assets/Image/istockphoto-1304726121-612x612.jpg"
import { FaEnvelope, FaPhone } from "react-icons/fa6";
const Menu = () => {
    return (
        <>
            <div className="right-info">
                <span><FaEnvelope /> Email:vinhptps34923@fpt.edu.vn</span>
                <span><FaPhone />  Hotline: 0898389790</span>
            </div>
            <header className="header d-flex">
                <div className="header__logo">
                    <img src={logo} />
                </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid nav">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to='/home' className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/picture' className="nav-link">Pictures</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/SoKhamBenh' className="nav-link">Sổ Khám bệnh</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/ThongTinSoKham' className="nav-link">Thông Tin Sổ Khám</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Dangkykhambenh' className="nav-link">Đăng ký khám bệnh</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/DoctorNgoai' className="nav-link">Bác Sĩ Ngoại khoa</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/DoctorNoi' className="nav-link">Bác Sĩ Nội Khoa</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/SoKhamNgoai' className="nav-link">Sổ Khám Khoa Ngoại</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/SoKhamNoi' className="nav-link">Sổ Khám Khoa Nội</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/formhook' className="nav-link">Form-hook</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Login' className="nav-link"> Login </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="banner">
                <span><img src={banner} className="banner__img" alt="banner" /> <img src={banner2} className="banner__img2" alt="banner" /> </span>
            </div>

        </>
    )
}

export default Menu