import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const HandlerNavigate = () => {
    navigate("/store");
  };
  return (
    <div>
      <h1>jonyyy</h1>
      <h1>chupala</h1>
      <button onClick={HandlerNavigate}>store</button>
    </div>
  );
};
export default Home;
