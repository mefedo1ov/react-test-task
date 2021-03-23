import React from "react";
import { Link } from "react-router-dom";

import { components } from "@atlaskit/select";

const { Option } = components;

export default function MyOption({ children, ...props }) {
  const { label } = props.data;

  return (
    <Link to={`${label}`}>
      <Option {...props}>{children}</Option>
    </Link>
  );
}
