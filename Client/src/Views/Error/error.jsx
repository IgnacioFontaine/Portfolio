import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Soy el error</h1>
      <div>
        <button onClick={()=>{navigate("/")}}>Return to home</button>
      </div>
    </div>
  );
};

export default Error;