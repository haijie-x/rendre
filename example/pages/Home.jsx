import React from "react";

const Home = (props) => {
  const a = <h2>HomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome</h2>;
  return (
    <>
      {new Array(1000).fill(0).map((i) => {
        return a;
      })}
    </>
  );
};

export default Home;
