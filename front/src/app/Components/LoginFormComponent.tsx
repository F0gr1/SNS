import { Input, TextField } from "@mui/material";
import React from "react";

const LoginFormComponent = () => {
  return (
    <div>
      <div>
        <div>
          <Input placeholder="Email" />
        </div>
        <div>
          <Input placeholder="Password" />
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;
