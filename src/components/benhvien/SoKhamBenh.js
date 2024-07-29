import { useState } from "react";
import axios from "axios";
const SoKhamBenh = () => {
    const [formData, setFormData] = useState({
        sokb: '',
        name: '',
        tuoi: '',
        cccd: '',
        diachi: '',
        muckham:'',
        ngaydang: '',
        nameBV: '',
        diachibv: '',
        namebs: '',
        msbs: '',
        chuyenkhoa: '',
        tuanhoan: '',
        mach: '',
        huyetap: '',
        tim: '',
        hohap: '',
        tieuhoa: '',
        thankinh: '',
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
            const patientres = await axios.get('http://localhost:3006/load/patients');
            const patientId = patientres.data.id;
            // Gửi dữ liệu bệnh viện
            const hospitalResponse = await axios.post('http://localhost:3006/add/hospitals', {
                nameBV: formData.nameBV,
                diachibv: formData.diachibv
            });
            // const hospitalres = await axios.get('http://localhost:3006/load/hospitals');
            const hospitalId = hospitalResponse.data.id;

            // Gửi dữ liệu bác sĩ
            const doctorResponse = await axios.post('http://localhost:3006/add/doctors', {
                namebs: formData.namebs,
                msbs: formData.msbs,
                chuyenkhoa: formData.chuyenkhoa
            });
            const doctorres = await axios.get('http://localhost:3006/load/doctors');
            const doctorId = doctorres.data.id;



            // Gửi dữ liệu khám bệnh
            await axios.post('http://localhost:3006/add/medicalExaminations', {
                patient_id: patientId,
                hospital_id: hospitalId,
                doctor_id: doctorId,
                tuanhoan: formData.tuanhoan,
                mach: formData.mach,
                huyetap: formData.huyetap,
                tim: formData.tim,
                hohap: formData.hohap,
                tieuhoa: formData.tieuhoa,
                thankinh: formData.thankinh,
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
                <div className="form-nhap d-flex">
                <div className="col-6">
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
                                <option value="1">chuyên khoa nội</option>
                                <option value="2">chuyên khoa ngoại</option>
                                <option value="3">Đa khoa</option>
                            </select>
                        </div>
                    </div>
                    {/* <div className="col-6">
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
                    </div> */}
                </div>
                <h2 className="text-center">Nội Dung Khám</h2>
                <div className="d-flex">
                    {/* <div className="col-6">
                        <h2 className="text-center">Khám Nội Khoa</h2>
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
                            <label htmlFor="tim" className="form-label">Nhịp Tim</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tim"
                                name="tim"
                                placeholder="Số nhịp trên phút"
                                value={formData.tim}
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
                    </div> */}
                    <div className="col-6">
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

export default SoKhamBenh;
