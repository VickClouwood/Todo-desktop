import React from "react";
import GoogleLogin from "react-google-login";

function Login() {
  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
  };
  return (
    <>
      <header className="App-header">
        <h1>Tasks Desktop</h1>
        <h3>A desktop App for Google Tasks</h3>
        <div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </header>
    </>
  );
}

export default Login;
