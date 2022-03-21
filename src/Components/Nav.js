import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src="./query.png" alt="logo" />
        <div>
          <span>Q</span>uery
        </div>
      </Link>
      <Link to="/HaveQues" className="ques">
        <div>Have some questions</div>
      </Link>
    </div>
  );
};

export default Nav;
