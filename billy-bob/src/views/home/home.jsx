import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/cards/Cards";
import { getProduct } from "../../Redux/actions";

const Home = () => {
  const newProduct = useSelector((state) => state?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div>
      <h1>jonyyy</h1>
      <h1>chupala</h1>
      <Cards product={newProduct} />
    </div>
  );
};
export default Home;
