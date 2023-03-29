import axios from "axios";
import React, { useEffect } from "react";

export default function LoginTest() {
  useEffect(() => {
    axios({
      url: "/login",
      method: "POST",
      data: {
        accountId: "abc123",
        password: "testabc123",
      },
    }).then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div>LoginTest</div>;
}
