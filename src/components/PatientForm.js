import React from 'react';

class PatientForm extends React.Component {
  state = {
    name: '',
    age: '',
    gender: '',
    address: '',
    phone: '',
    symptoms: '',
    diagnosis: '',
    treatment: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic gửi dữ liệu đến server hoặc lưu trữ tại đây
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Họ Và Tên:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Tuổi:</label>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Giới Tính:</label>
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Địa Chỉ:</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Triệu Chứng:</label>
          <textarea
            name="symptoms"
            value={this.state.symptoms}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Chẩn Đoán:</label>
          <textarea
            name="diagnosis"
            value={this.state.diagnosis}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Điều Trị:</label>
          <textarea
            name="treatment"
            value={this.state.treatment}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PatientForm;
