import { useState } from "react";
import axios from "axios";

const SoKhamNgoai = () => {
    const [formData, setFormData] = useState({
        sokb:'',
        nameBV: '',
        diachibv: '',
        namebs: '',
        msbs: '',
        chuyenkhoa: '',
        chieucao: '',
        cannang: '',
        vongnguc: '',
        ngoaida: '',
        sinhduc: '',
        xuongkhop: '',
        mattrai: '',
        matphai: ''
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
                chieucao: formData.chieucao,
                cannang: formData.cannang,
                vongnguc: formData.vongnguc,
                ngoaida: formData.ngoaida,
                sinhduc: formData.sinhduc,
                xuongkhop: formData.xuongkhop,
                mattrai: formData.mattrai,
                matphai: formData.matphai
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
                <h2 className="text-center">Khám Ngoại Khoa</h2>
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
                                <option value="2">chuyên khoa ngoại</option>
                            </select>
                        </div>
                        <h2 className="text-center">Nội Dung Khám</h2>
                        <div className="mb-3 ">
                            <label htmlFor="chieucao" className="form-label">Chiều cao</label>
                            <input
                                type="text"
                                className="form-control"
                                id="chieucao"
                                name="chieucao"
                                placeholder="chiều cao ...cm"
                                value={formData.chieucao}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="cannang" className="form-label">Cân Nặng</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cannang"
                                name="cannang"
                                placeholder="cân nặng ...kg"
                                value={formData.cannang}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="vongnguc" className="form-label">Vòng Ngực Trung Bình</label>
                            <input
                                type="text"
                                className="form-control"
                                id="vongnguc"
                                name="vongnguc"
                                placeholder="Vòng ngực trung bình ...cm"
                                value={formData.vongnguc}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="ngoaida" className="form-label">Bệnh ngoài da</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ngoaida"
                                name="ngoaida"
                                placeholder="Tình trạng da"
                                value={formData.ngoaida}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="sinhduc" className="form-label">Bộ Phận Sinh Dục/Tiết Niệu</label>
                            <input
                                type="text"
                                className="form-control"
                                id="sinhduc"
                                name="sinhduc"
                                placeholder="Tình trạng bộ phận"
                                value={formData.sinhduc}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="xuongkhop" className="form-label">Bộ Phận Xương Khớp</label>
                            <input
                                type="text"
                                className="form-control"
                                id="xuongkhop"
                                name="xuongkhop"
                                placeholder="Tình trạng xương khớp"
                                value={formData.xuongkhop}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="thiluc" className="form-label">Thị Lực</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mattrai"
                                name="mattrai"
                                placeholder="Tình trạng mắt trái .../10"
                                value={formData.mattrai}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="matphai"
                                name="matphai"
                                placeholder="Tình trạng mắt phải .../10"
                                value={formData.matphai}
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

export default SoKhamNgoai;