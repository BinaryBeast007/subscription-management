import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(
    "Subscription Management System is running on http://localhost:3000",
  );
});

export default app;
