import { Link } from "react-router-dom";

export default function Logo({ ...props }) {
  return (
    <Link to="/" {...props}>
      Bowery
    </Link>
  );
}
