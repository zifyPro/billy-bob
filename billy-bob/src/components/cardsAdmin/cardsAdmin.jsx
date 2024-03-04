"use client";
import useStore from "../../zustand/store/index";
import CardAdmin from "../cardAdmin/cardAdmin";

const CardsAdmin = () => {
  const { product, filter } = useStore((state) => ({
    product: state.product,
    filter: state.filter,
  }));

  const filteredProduct = product.filter(
    (p) => filter === "all" || p.type === filter
  );
  return (
    <div className=" mx-auto mt-10 rounded-lg  h-[50vh] overflow-scroll md:mt-8 md:w-3/4 md:overflow-x-hidden">
      {filteredProduct.map((product) => (
        <CardAdmin
          key={product?.id}
          id={product?.id}
          title={product?.title}
          description={product?.description}
          price={product?.price}
          img={product?.img}
          type={product?.type}
        />
      ))}
    </div>
  );
};
export default CardsAdmin;
