import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Evil Stuff</h1>

      <Link className="btn btn-primary" to="/catalog">
        Check our amazing catalog!
      </Link>
    </div>
  );
};

export default Home;
