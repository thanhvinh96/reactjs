import React, { useState, useEffect } from "react";
import axios from "axios";
const ThongTinSoKham = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Initial loading state


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {

                const response = await axios.get('http://localhost:3006/load/patients');
                setData(response.data.results);
                // console.log(data);.
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
        <div>
            <ul>
                <table  className='info-table'>
                    <thead>
                        <tr>
                            <th>THÔNG TIN BỆNH NHÂN</th>
                        </tr>
                    </thead>
                    {data.map((item, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>Tên: {item.name}</td>
                            </tr>
                            <tr>
                                <td>Tuổi: {item.tuoi}</td>
                            </tr>
                            <tr>
                                <td>CCCD: {item.cccd}</td>
                            </tr>
                            <tr>
                                <td>Địa chỉ: {item.diachi}</td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
            </ul>
        </div>
    );
}

export default ThongTinSoKham;