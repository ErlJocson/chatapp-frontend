import { Link } from "react-router-dom";
import styled from "styled-components";
function Nav() {
  return (
    <Navigation>
      <div className="left">
        <MyLink to="/">Home</MyLink>
      </div>
      <div className="right">
        <MyLink to="/login">Login</MyLink>
        <MyLink to="/register">register</MyLink>
        <MyLink to="#">logout</MyLink>
      </div>
    </Navigation>
  );
}

export default Nav;

const MyLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 10px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Navigation = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0967f;
`;
