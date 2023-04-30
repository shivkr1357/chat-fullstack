import express, { Request, Response } from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import cors, { CorsOptions } from "cors";

const allowedOrigin = ["http://localhost:3000"];

const options: CorsOptions = {
  origin: allowedOrigin,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: options,
});

app.use(cors(options));

io.on("connection", (socket: Socket) => {
  console.log("connected");

  const data = "Hlw ";
  socket.emit("message", data);

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("API Working");
});

server.listen(4000 || process.env.PORT, () => {
  console.log(`server listening to the port ${process.env.PORT || 4000}`);
});
