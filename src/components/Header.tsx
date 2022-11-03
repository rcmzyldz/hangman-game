import React, { ReactElement, FC } from "react";
import { Typography } from "@mui/material";

// define interface to represent component props
interface Props {
  title: String;
}

const Header: FC<Props> = ({ title }): ReactElement => {
  return (
    <Typography variant="h3" align="center">
      {title}
    </Typography>
  );
};
export default Header;
