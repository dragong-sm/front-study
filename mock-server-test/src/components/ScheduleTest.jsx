import React, { useEffect } from "react";
import axios from "axios";

export default function ScheduleTest() {
  useEffect(() => {
    axios.get("/schedule").then((res) => {
      console.log(res.data.users);
    });
  }, []);

  return <div>scheduleTest</div>;
}
