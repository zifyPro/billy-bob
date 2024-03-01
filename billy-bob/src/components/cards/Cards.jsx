import Card from "../card/Card";

const Cards = ({ product }) => {
  console.log(product);
  return (
    <div>
      {product.map(({ id, title, description, price, img, type }) => (
        <Card
          key={id}
          id={id}
          title={title}
          description={description}
          price={price}
          img={img}
          type={type}
        />
      ))}
    </div>
  );
};
export default Cards;
