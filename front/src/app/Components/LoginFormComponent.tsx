"use client";
import { Button, Input, TextField } from "@mui/material";
import React from "react";
import style from "../module/login.module.css";
import { useRouter } from "next/navigation";

const LoginFormComponent = () => {
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        const data = await response.json();
        router.push("/Top");
        // Perform actions for successful login
      } else {
        console.error("Login failed");
        // Perform actions for failed login
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Perform actions for any other errors
    }
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <div className={style.formCard}>
        <div className={style.form}>
          <div className={style.input}>
            <Input placeholder="Email" fullWidth color="primary" name="email" />
          </div>
          <div className={style.input}>
            <Input
              placeholder="Password"
              fullWidth
              color="primary"
              name="password"
            />
          </div>
          <div className={style.formButtonGroup}>
            <Button variant="contained">新規登録</Button>
            <button type="submit">ログイン</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginFormComponent;
