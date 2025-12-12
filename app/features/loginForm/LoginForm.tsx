import { Form } from "react-router";
import { Button, TextInput } from "~/components/ui";

const LoginForm = () => {
  return (
    <Form
      className="flex justify-center flex-col items-center mt-10 max-w-md mx-auto gap-5"
      method="post">
      <TextInput
        label="Login"
        id="loginInput"
        type="text"
        name="login"
        className="w-full"
      />
      <TextInput
        label="Hasło"
        id="passwordInput"
        type="password"
        name="password"
        className="w-full"
      />
      <Button classname="w-full mt-5">Zaloguj</Button>
    </Form>
  );
};

export default LoginForm;
