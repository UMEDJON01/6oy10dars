import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children, user, accessToken }) {
  const navigate = useNavigate();
  if (accessToken) {
    return children;
  } else {
    return navigate("/signup");
  }
}

export default ProtectedRoutes;
