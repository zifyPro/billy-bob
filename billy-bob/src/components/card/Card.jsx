import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa6";

const Card = (product) => {
  //   const handlerBuy = () => {
  //     addProductToCart(product);
  //   };

  const alertDetails = () => {
    Swal.fire({
      title: product.title,
      text: product.description,
      imageUrl: product.img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: product.title,
      background: "#19191A", // fondo negro
      color: "#A2A2A3", // texto blanco
    });
  };

  //   if (!["comida", "bebida", "promos"].includes(product.type)) {
  //     return null;
  //   }

  return (
    <div>
      <div>
        <div>
          <img src={product?.img} alt="Imagen de comida" />
        </div>
        <div>
          <div>{product?.title}</div>
          <p>{product?.description}</p>
          <button onClick={alertDetails}>Leer más</button>
        </div>
        <div>
          <div>{"$" + product?.price}</div>
          {/* <button
            onClick={handlerBuy}
          >
            <FaCartPlus />
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default Card;
