import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // navigate("/");  We can write the code to go back
      navigate(-1);
    }, 3000);
  });
  return (
    <>
      <h2>OOOPS!!! SomeThing went wrong</h2>
    </>
  );
}

export default ErrorPage;
