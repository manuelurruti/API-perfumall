const express = require("express");
const db = require("./database/models");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/perfumall/api/v1/users", userRoutes);
app.use("/perfumall/api/v1/products", productRoutes);

app.get("/", async (req, res) => {
    const response = await db.Producto.findAll();
    res.json(response);
});
app.listen(3000, () =>
    console.log("http://localhost:3000/perfumall/api/v1/users")
);
