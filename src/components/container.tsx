import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  center?: boolean;
}

const Container: FC<Props> = ({ children, center }) => {
  return (
    <div
      className={`bg-gradient-to-br from-blue-400 to-indigo-400 p-2 min-h-screen ${
        center && "flex justify-center items-center"
      }`}
    >
      <div className="pb-2"></div>
      {children}
    </div>
  );
};

export default Container;
