import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct, getProduct } from "../../Redux/actions";
import Cards from "../../components/cards/Cards";

const Store = () => {
  const newProduct = useSelector((state) => state?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const HandlerFilter = (type) => {
    dispatch(filterProduct(type));
  };
  return (
    <div>
      <button onClick={() => HandlerFilter("comida")}>Comida</button>
      <button onClick={() => HandlerFilter("bebida")}>Bebida</button>
      <button onClick={() => HandlerFilter("promos")}>Promos</button>
      <div className="flex flex-col items-center h-[65vh]">
        <Cards product={newProduct} />
      </div>
    </div>
  );
};
export default Store;
