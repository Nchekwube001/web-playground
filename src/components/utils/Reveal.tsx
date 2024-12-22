import React, { FC, ReactElement } from "react";

interface Props {
  children: ReactElement;
  width?: "fit-content" | "100%";
}
const Reveal: FC<Props> = ({ children, width }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default Reveal;
