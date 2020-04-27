/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { PageWrapper, PageTitle } from "../../styles";
import styled from "styled-components";
import { colors } from "../../constant_styles";

const AdminLabel = styled.label`
  color: ${colors.slategrey};
  margin: 10px 0px;
`;

const AdminInput = styled.input`
  color: ${colors.slategrey};
  border: 2px solid ${colors.slategrey};
  margin: 5px 0px 20px;
  padding: 10px 20px;
  font-size: 18px;
  color: ${colors.vermilion};
  text-align: center;
  :hover,
  :active,
  :focus {
    border-color: ${colors.paleblue};
    border-radius: 10px;
    cursor: pointer;
  }
`;

const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  justify-content: space-between;
  width: 80%;
  max-width: 350px;
  height: auto;

  @media (min-width: 500px) {
    width: 40%;
  }

  @media (min-width: 700px) {
    width: 30%;
  }

  > button {
    background: transparent;
    padding: 10px;
    width: fit-content;
    border: 2px solid ${colors.slategrey};
    border-radius: 20px;
    font-size: 16px;
    margin: 30px auto;
    :hover,
    :active,
    :focus {
      border-color: ${colors.paleblue};
      color: ${colors.paleblue};
      cursor: pointer;
    }
  }
`;
const LoginError = styled.div`
  margin: 0px auto;
  border: 1px solid ${colors.vermilion};
  text-align: center;
  width: 80%;
  max-width: 350px;

  @media (min-width: 500px) {
    width: 40%;
  }

  @media (min-width: 700px) {
    width: 30%;
  }
`;

export default function Admin(props) {
  const [success, setSuccess] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const user_name = process.env.REACT_APP_USER;
    const user_pw = process.env.REACT_APP_PASS;
    const { username, password } = e.target;
    const user = username.value;
    const pass = password.value;
    console.log(user_name, user_pw, pass);
    if (user == user_name && pass == user_pw) {
      setSuccess(true);
      const { history } = props;
      history.push("/blog-entry");
    } else {
      setSuccess(false);
    }
    username.value = "";
    password.value = "";
  };
  return (
    <PageWrapper>
      <PageTitle margin="20px auto">Admin Login</PageTitle>
      {success == false && <LoginError>Incorrect PW</LoginError>}
      <AdminForm
        onSubmit={(ev) => {
          handleLogin(ev);
        }}
      >
        <AdminLabel htmlFor="username">Username</AdminLabel>
        <AdminInput name="username" />

        <AdminLabel htmlFor="password">Password</AdminLabel>
        <AdminInput
          name="password"
          onChange={() => {
            setSuccess(null);
          }}
        />

        <button type="submit">login</button>
      </AdminForm>
    </PageWrapper>
  );
}
