import React, { useState, useEffect } from "react";
import axios from "axios";



const Home = () => {
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
            <table className='info-table'>
                <thead>
                    <tr>
                        <th>THÔNG TIN BỆNH NHÂN</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>Tên: {item.name}</td>
                            <td>Tuổi: {item.tuoi}</td>
                            <td>CCCD: {item.cccd}</td>
                            <td>Địa chỉ: {item.diachi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
