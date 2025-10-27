import express  from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get('/about', (req, res) => {
  res.send("Hello User app is working");
});

export default app;