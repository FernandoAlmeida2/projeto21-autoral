import { LogRegScreen } from "../../assets/styles/LoginSignUpScreen";
import { StyledLink } from "../../assets/styles/StyledLink";
import Form from "../../components/Form/Form";

export default function Login() {
  return (
    <LogRegScreen>
      <h1>Sign in</h1>
      <Form type="Login" />
      <StyledLink to="/signup">Sign up</StyledLink>
    </LogRegScreen>
  );
}