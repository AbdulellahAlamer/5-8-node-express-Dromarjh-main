import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

// TODO: write code for cors

// TODO: write code to define routes

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
