import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = () => {
  const onSuccess = (response: any) => {
    console.log('Login successful:', response);
    // ここでバックエンドにトークンを送信する
  };

  const onFailure = (response: any) => {
    console.log('Login failed:', response);
  };

  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleSignIn;
