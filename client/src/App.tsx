import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("message", (data: string, cb: () => {}) => {
      console.log(data);
    });
    // });
  }, []);

  return <div className="App"></div>;
}

export default App;
