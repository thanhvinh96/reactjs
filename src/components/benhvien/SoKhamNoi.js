import { useState } from "react";
import axios from "axios";
const SoKhamNoi = () => {
    const [formData, setFormData] = useState({
        sokb:'',
        tuanhoan: '',
        mach: '',
        huyetap: '',
        nhiptim: '',
        hohap: '',
        tieuhoa: '',
        thankinh: ''
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
            const hospitalResponse = await axios.post('http://localhost:3006/add/hospitals', {
                nameBV: formData.nameBV,
                diachibv: formData.diachibv
            });

            // Gửi dữ liệu bác sĩ
            const doctorResponse = await axios.post('http://localhost:3006/add/doctors', {
                namebs: formData.namebs,
                msbs: formData.msbs,
                chuyenkhoa: formData.chuyenkhoa
            });
            // Gửi dữ liệu khám bệnh
            await axios.post('http://localhost:3006/add/medicalExaminations', {
                sokb:formData.sokb,
                tuanhoan: formData.tuanhoan,
                mach: formData.mach,
                huyetap: formData.huyetap,
                nhiptim: formData.nhiptim,
                hohap: formData.hohap,
                tieuhoa: formData.tieuhoa,
                thankinh: formData.thankinh
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
                <h2 className="text-center">Khám Nội Khoa</h2>
                <div className="form-nhap">
                    <div className="col-6 m-auto">
                        <div className="mb-3">
                            <label htmlFor="nameBV" className="form-label">Tên Bệnh Viện</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameBV"
                                name="nameBV"
                                placeholder="Nhập tên bệnh viện"
                                value={formData.nameBV}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="diachibv" className="form-label">Địa chỉ bệnh viện</label>
                            <input
                                type="text"
                                className="form-control"
                                id="diachibv"
                                name="diachibv"
                                placeholder="Nhập địa chỉ bệnh viện"
                                value={formData.diachibv}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="namebs" className="form-label">Tên Bác Sĩ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="namebs"
                                name="namebs"
                                placeholder="Nhập Tên Bác Sĩ"
                                value={formData.namebs}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="msbs" className="form-label">Mã số Bác Sĩ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="msbs"
                                name="msbs"
                                placeholder="Nhập mã số bác sĩ"
                                value={formData.msbs}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="chuyenkhoa" className="form-label">Chuyên khoa</label>
                            <select
                                className="form-control"
                                id="chuyenkhoa"
                                name="chuyenkhoa"
                                value={formData.chuyenkhoa}
                                onChange={handleChange}
                            >
                                <option value="2">chuyên khoa Nội</option>
                            </select>
                        </div>
                        <h2 className="text-center">Nội Dung Khám</h2>
                        <div className="mb-3">
                            <label htmlFor="tuanhoan" className="form-label">Bộ máy tuần hoàn</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tuanhoan"
                                name="tuanhoan"
                                placeholder="Tình trạng Tuần hoàn"
                                value={formData.tuanhoan}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mach" className="form-label">Mạch đập</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mach"
                                name="mach"
                                placeholder="Số nhịp trên phút"
                                value={formData.mach}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="huyetap" className="form-label">Huyết áp</label>
                            <input
                                type="text"
                                className="form-control"
                                id="huyetap"
                                name="huyetap"
                                placeholder="Chỉ số huyết áp"
                                value={formData.huyetap}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nhiptim" className="form-label">Nhịp Tim</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nhiptim"
                                name="nhiptim"
                                placeholder="Số nhịp trên phút"
                                value={formData.nhiptim}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hohap" className="form-label">Bộ Hô Hấp</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hohap"
                                name="hohap"
                                placeholder="Tình trạng hô hấp"
                                value={formData.hohap}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tieuhoa" className="form-label">Bộ Tiêu Hóa</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tieuhoa"
                                name="tieuhoa"
                                placeholder="Tình trạng tiêu hóa"
                                value={formData.tieuhoa}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="thankinh" className="form-label">Bộ Thần Kinh</label>
                            <input
                                type="text"
                                className="form-control"
                                id="thankinh"
                                name="thankinh"
                                placeholder="Tình trạng thần kinh"
                                value={formData.thankinh}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" id="btn" type="submit">Thêm</button>
            </form>
            <hr></hr>
        </>
    )
}

export default SoKhamNoi;