import React from "react";
import { Link } from "react-router-dom";

type Props = {
  url: string;
  name: string;
};

const NavLink: React.FC<Props> = ({ url, name }) => {
  return (
    <Link to={url}>
      <div className="font-semibold text-xl uppercase">{name}</div>
    </Link>
  );
};

export default NavLink;
