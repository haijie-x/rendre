import React from "react";

const Home = (props) => {
  const a = <h2>HomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome</h2>;
  return (
    <>
      {new Array(100).fill(0).map((i) => {
        return a;
      })}
    </>
  );
};

export default Home;
