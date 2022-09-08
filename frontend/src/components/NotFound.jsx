import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-3xl text-bold text-center pt-10">
        Either you are lost 👻
        <br />
        or this page is not implemented
        <br />
        Go{" "}
        <Link className="underline text-purple-800" to="/">
          Home
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
