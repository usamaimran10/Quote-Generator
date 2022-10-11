import React from "react";
import classes from "../styles/Home.module.css";
import Router, { useRouter } from "next/router";

const PageLayout = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <span className={classes.heading}>Welcome to the Quote Generator</span>
      </div>
      <div className={classes.btn}>
        <button
          onClick={() => router.push("/QuotePage")}
          className={classes.button}
        >
          Click to move to code Generator page
        </button>
      </div>
    </div>
  );
};

export default PageLayout;
