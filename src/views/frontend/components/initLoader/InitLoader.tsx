import React, { useEffect } from "react";

const InitLoader = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [setIsLoading]);
  return (
    <div>
      <img src="/assets/images/loader_lg.svg" alt="loader" />
    </div>
  );
};

export default InitLoader;
