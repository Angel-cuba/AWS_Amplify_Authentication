import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButton = () => {
  const onSignInWithFacebook = () => {
    console.warn('SignInWithFacebook');
  };
  const onSignInWithGoogle = () => {
    console.warn('SignInWithGoogle');
  };
  const onSignInWithApple = () => {
    console.warn('SignInWithApple');
  };
  return (
    <>
      <CustomButton
        text="SignIn with Facebook"
        onPress={onSignInWithFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="SignIn with Google"
        onPress={onSignInWithGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="SignIn with Apple"
        onPress={onSignInWithApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButton;
