import Card from "../card/Card";

const Cards = ({ product }) => {
  console.log(product);
  return (
    <div>
      {product.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          img={product.img}
          type={product.type}
        />
      ))}
    </div>
  );
};
export default Cards;
