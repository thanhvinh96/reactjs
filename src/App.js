
import './App.css';
import SoKhamBenh from './components/benhvien/SoKhamBenh';
import ThongTinSoKham from './components/benhnhan/ThongTinSoKham';
import Home from './components/Home';
import ListPicture from './components/ListPicture';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Counter from './components/Counter';
import Login from './components/Login';
import FormHook from './components/Form';
import Dangkykhambenh from './components/benhvien/Dangkykhambenh';
import SoKhamNgoai from './components/benhvien/SoKhamNgoai';
import SoKhamNoi from './components/benhvien/SoKhamNoi';
import DoctorNgoai from './components/benhvien/DoctorNgoai';
import DoctorNoi from './components/benhvien/DoctorNoi';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Menu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/picture" element={<ListPicture />} />
          <Route path="/SoKhamBenh" element={<SoKhamBenh />} />
          <Route path="/ThongTinSoKham" element={<ThongTinSoKham />} />
          <Route path="/Dangkykhambenh" element={<Dangkykhambenh/>} />
          <Route path="/DoctorNgoai" element={<DoctorNgoai/>} />
          <Route path="/DoctorNoi" element={<DoctorNoi/>} />
          <Route path="/SoKhamNgoai" element={<SoKhamNgoai/>} />
          <Route path="/SoKhamNoi" element={<SoKhamNoi/>} />
          <Route path="/formhook" element={<FormHook />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
