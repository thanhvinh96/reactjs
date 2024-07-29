import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


const GoogleLoginbutton = () => {

    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
        <>
            <GoogleLogin
                clientId="268718957121-49hhh3nmskfcq9cgc355nq6d1fllk8u3.apps.googleusercontent.com"
                buttonText="Đăng nhập bằng Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}

export default GoogleLoginbutton;