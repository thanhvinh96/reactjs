import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dangkykhambenh = () => {
    const [formData, setFormData] = useState({
        sokb: '',
        name: '',
        tuoi: '',
        cccd: '',
        diachi: '',
        muckham:'',
        ngaydang: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Gửi dữ liệu bệnh nhân
            const patientResponse = await axios.post('http://localhost:3006/add/patients', {
                sokb: formData.sokb,
                name: formData.name,
                tuoi: formData.tuoi,
                cccd: formData.cccd,
                diachi: formData.diachi,
                muckham: formData.muckham,
                ngaydang: formData.ngaydang
            });
            console.log('Form Data Submitted Successfully');

        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    return (
        <>
            <form id="productTypeForm" onSubmit={handleSubmit}>
                <div className="text-center soKhambenh">
                    <h2>Sổ Khám Bệnh Điện Tử (EHR)</h2>
                    Mã Số:
                    <input
                        type="text"
                        id="sokb"
                        name="sokb"
                        placeholder="Nhập mã số"
                        value={formData.sokb}
                        onChange={handleChange}
                    />
                </div>
                <hr />
                <div className="form-nhap d-flex">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Họ Và Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Nhập Tên bệnh nhân"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tuoi" className="form-label">Tuổi</label>
                            <input
                                type="number"
                                className="form-control"
                                id="tuoi"
                                name="tuoi"
                                placeholder="Nhập tuổi bệnh nhân"
                                value={formData.tuoi}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cccd" className="form-label">Số CMND/CCCD</label>
                            <input
                                type="number"
                                className="form-control"
                                id="cccd"
                                name="cccd"
                                placeholder="Nhập số cmnd/cccd"
                                value={formData.cccd}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="diachi" className="form-label">Địa chỉ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="diachi"
                                name="diachi"
                                placeholder="Nhập Địa chỉ hiện tại"
                                value={formData.diachi}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="muckham" className="form-label">Chuyên Mục Khám</label>
                            <input
                                type="text"
                                className="form-control"
                                id="muckham"
                                name="muckham"
                                placeholder="Nhập Chuyên Mục Khám"
                                value={formData.muckham}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ngaydang" className="form-label">Ngày Khám</label>
                            <input
                                type="date"
                                className="form-control"
                                id="ngaydang"
                                name="ngaydang"
                                placeholder="chọn ngày"
                                value={formData.ngaydang}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" id="btn" type="submit">Thêm</button>
            </form>
            <div className="d-flex" style={{ marginLeft: '470px' }}>
                <h3>Chọn Phòng Khám</h3>
                <Link to='/SoKhamNgoai'><button style={{ marginLeft: '20px' }} className="btn btn-primary" id="btn">P101</button></Link>
                <Link to='/SoKhamNgoai'><button style={{ marginLeft: '40px' }} className="btn btn-primary" >P102</button></Link>
                <Link to='/SoKhamNoi'><button style={{ marginLeft: '40px' }} className="btn btn-primary" >P201</button></Link>
                <Link to='/SoKhamNoi'><button style={{ marginLeft: '40px' }} className="btn btn-primary" >P202</button></Link>
            </div>
            <hr></hr>
        </>
    )
}
export default Dangkykhambenh;
