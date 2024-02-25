import { Button, Input, TextField } from "@mui/material";
import React from "react";
import style from "../module/login.module.css";

const LoginFormComponent = () => {
  return (
    <form className={style.container}>
      <div className={style.formCard}>
        <div className={style.form}>
          <div>
            <Input placeholder="Email" fullWidth color="primary" />
          </div>
          <div>
            <Input placeholder="Password" fullWidth color="primary" />
          </div>
          <div className={style.formButtonGroup}>
            <Button variant="contained">新規登録</Button>
            <Button variant="contained">ログイン</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginFormComponent;
