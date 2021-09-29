import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  margin-left: 500px;
`;

function Btn(props) {
  return (
    <Box>
      <Link to="/assets">
        <Button size="small" variant="contained">
          Assets
        </Button>
      </Link>
      <Link to="/users">
        <Button size="small" variant="contained">
          Users
        </Button>
      </Link>
      <Link to="graphs">
      <Button size="small" variant="contained">
        Graphics
      </Button>
      </Link>
      <Link to="register">
      <Button size="small" variant="contained">
        Register
      </Button>
      </Link>
    </Box>
  );
}

export default Btn;
