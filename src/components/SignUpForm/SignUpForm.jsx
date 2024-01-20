/*import { useDispatch } from 'react-redux';
import { useAuth } from 'Hooks/useAuth.js';
import { signUp } from '../redux/auth/operations';
import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';

const SignUpFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too short! At least 6')
    .required('Required')
    .max(64, 'Too long! Less then 64'),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(
    <EyeSlash alt="eye_slash">EyeSlash</EyeSlash>
  );

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<EyeActive alt="eye_active">EyeActive</EyeActive>);
      setType('text');
    } else {
      setIcon(<EyeSlash alt="eye_slash">EyeSlash</EyeSlash>);
      setType('password');
    }
  };

  const HandleSubmit = values => {
    dispatch(
      signUp({
        email: values.email,
        password: values.password,
      })
    );
    navigate('/signin', { replace: true });
  };

  const { error } = useAuth();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignUpFormSchema}
          onSubmit={(values, actions) => {
            HandleSubmit(values);
            actions.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <FormWrapper>
              <Label>Enter your email</Label>
              <FieldInput
                autoComplete="on"
                type="email"
                name="email"
                placeholder="E-mail"
                style={
                  errors.email && touched.email
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                }
              />
              <ErrorMsg name="email" component="div" />

              <Label>Enter your password</Label>
              <InputWrapper>
                <FieldInput
                  autoComplete="on"
                  type={type}
                  name="password"
                  placeholder="Password"
                  style={
                    errors.password && touched.password
                      ? { borderColor: '#EF5050', color: '#EF5050' }
                      : null
                  }
                />
                <span onClick={handleToggle}>{icon}</span>
              </InputWrapper>

              <ErrorMsg name="password" component="div" />

              
              <ButtonSbmt type="submit">Sign Up</ButtonSbmt>
            </FormWrapper>
          )}
        </Formik>

        <div>
          <StyledLink to="/signIn">Sign in</StyledLink>
        </div>
      </div>
    </div>
  );
};*/