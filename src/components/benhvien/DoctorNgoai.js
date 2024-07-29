import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DoctorNgoai = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Initial loading state


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {

                const response = await axios.get('http://localhost:3006/load/patients/ngoai');
                setData(response.data.results);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div>
                <h2 style={{ marginLeft: '700px' }}>THÔNG TIN BỆNH NHÂN</h2>
                <table className='table'>
                    <thead>
                        <th scope="col">STT</th>
                        <th scope="col">Sổ Khám</th>
                        <th scope="col">Họ Và Tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Số CCCD</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col" >Chi tiết</th>
                    </thead>
                    {data.map((item) => (
                        <tbody >
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.sokb}</td>
                                <td>{item.name}</td>
                                <td>{item.tuoi}</td>
                                <td>{item.cccd}</td>
                                <td>{item.diachi}</td>
                                <td><Link to={`/SoKhamNgoai`}>Khám</Link></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    )
}

export default DoctorNgoai;