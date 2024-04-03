import React, { useEffect } from "react";

export default function CustomLifeCycle() {
  useEffect(() => {
    console.log("life cycle mount");
    return () => {
      console.log("life cycle unmount");
    };
  }, []);

  return <div>Life Cycle</div>;
}
