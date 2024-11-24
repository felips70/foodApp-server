const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dishes = require("./routes/dishesRoutes");
const user = require("./routes/userRoutes");

const app = express();
const port = 3000;

app.use(cors({
  origin: "http://localhost:5173"
}))

app.use(express.json());

async function main() {
  await mongoose.connect("mongodb+srv://Cluster76894:RV1JSHNbUmFx@cluster76894.fic4s.mongodb.net/FoodApp?retryWrites=true&w=majority&appName=Cluster76894");
  console.log('Connected to mongodb...')
}

main().catch(err => console.log(err))

app.use("/api", dishes);
app.use("/api", user);

// Middleware
app.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})
