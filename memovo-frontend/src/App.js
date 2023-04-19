import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import ResetStyle from "./assets/styles/Reset";
import UserContext from "./contexts/UserContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

export default function App() {
  const { userData } = useContext(UserContext);
  return (
    <AppContainer>
      <ResetStyle />
      <BrowserRouter>
        {userData ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`

  * {
    font-family: "Josefin Sans", sans-serif;
    box-sizing: border-box;
  }
`;
