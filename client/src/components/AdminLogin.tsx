import AdminContext from "contexts/AdminContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface FormData {
  password: string;
}

const secretPassword = "?x599nYwZpy4yeq2lgg3_j^nb";

function AdminLogin() {
  const { register, handleSubmit, resetField } = useForm<FormData>();
  const { setIsAdmin } = useContext(AdminContext);
  const history = useHistory();

  function loginAsAdmin(data: FormData) {
    if (data.password === secretPassword) {
      setIsAdmin(true);
      history.push("/");
    } else resetField("password");
  }

  return (
    <Form onSubmit={handleSubmit(loginAsAdmin)}>
      <FormGroup>
        <h1>Enter password to unlock admin privileges</h1>
        <input type="password" {...register("password")} />
      </FormGroup>
    </Form>
  );
}

export default AdminLogin;

const Form = styled.form`
  display: grid;
  place-items: center;
  height: 480px;
`;

const FormGroup = styled.div`
  & input {
    margin-top: 24px;
    font-size: 24px;
    outline: none;
    color: black;
    width: 100%;
    height: 40px;
    text-align: center;
  }
`;
