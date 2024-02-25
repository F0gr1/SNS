import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import style from "../module/Top/page.module.css";
const page = () => {
  return (
    <>
      <HeaderComponent />
      <main className={style.main}>
        <div className={style.CardGroup}>
          <div className={style.card}>card</div>
          <div className={style.card}>card</div>
          <div className={style.card}>card</div>
          <div className={style.card}>card</div>
          <div className={style.card}>card</div>
        </div>
      </main>
    </>
  );
};

export default page;
