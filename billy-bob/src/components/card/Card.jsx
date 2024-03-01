const Card = ({ id, title, description, price, img, type }) => {
  //   const handlerBuy = () => {
  //     addProductToCart(product);
  //   };

  //   const alertDetails = () => {
  //     Swal.fire({
  //       title: product.title,
  //       text: product.description,
  //       imageUrl: product.img,
  //       imageWidth: 400,
  //       imageHeight: 200,
  //       imageAlt: product.title,
  //       background: "#19191A", // fondo negro
  //       color: "#A2A2A3", // texto blanco
  //     });
  //   };

  //   if (!["comida", "bebida", "promos"].includes(product.type)) {
  //     return null;
  //   }

  return (
    <div>
      <div>
        <div>
          <img src={img} alt="Imagen de comida" />
        </div>
        <div>
          <div>{title}</div>
          <p>{description}</p>
          {/* <button onClick={alertDetails}>Leer más</button> */}
        </div>
        <div>
          <div>{"$" + price}</div>
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
