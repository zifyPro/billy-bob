import { useNavigate } from "react-router-dom";
import Foter from "../../components/Foter/Foter";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const HandlerNavigate = () => {
    navigate("/store");
  };
  return (
    <section className="">
      <div className="flex flex-wrap">
        <div className="h-full w-1/2 p-1 rounded-xl">
          <a href="/store">
            <img
              src="./promo.jpg"
              alt="Imagen 1"
              className="w-full h-full md:w-1/2 md:h-3/4 md:ml-auto rounded-xl"
            />
          </a>
        </div>

        <div className="p-1 h-full w-1/2 rounded-xl">
          <a href="/storePuntos">
            <img
              src="./dd05764f-508a-470c-9128-baa374287004.jpg"
              alt="Imagen 2"
              className="w-full h-full md:w-2/4 md:h-3/4 md:mx-left rounded-xl"
            />
          </a>
        </div>
        <div className="w-full p-1 rounded-xl">
          <a
            href="https://maps.app.goo.gl/RYFkr1AgpJwNdh1w9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.on24.com.ar/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-11-at-4.21.57-PM.jpeg"
              alt="Imagen 3"
              className="w-full h-full md:w-2/4 md:h-full md:mx-auto rounded-xl"
            />
          </a>
        </div>
      </div>

      <Foter />
    </section>
  );
};
export default Home;
