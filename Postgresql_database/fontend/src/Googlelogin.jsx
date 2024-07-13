// src/components/GoogleLoginComponent.js

import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = () => {
    const handleSuccess = (response) => {
        console.log('Login Success:', response);
        // Handle the response token as needed
    };

    const handleError = () => {
        console.log('Login Failed');
    };

    return (
        <GoogleOAuthProvider clientId="1DT5oAtQz9BJwjO37vw2naArIDUj7j0o">
            <GoogleLogin
                onSuccess={handleSuccess}
                onFailure={handleError}
                useOneTap
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginComponent;
