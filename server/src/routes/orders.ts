import express from "express"

// controllers
import { allOrders, deleteOrder, getSingleOrder, myOrders, newOrder, processOrder } from "../controllers/order.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// route -> /api/v1/order/new
app.post("/new", newOrder);
app.get("/my", myOrders)
app.get("/all", adminOnly, allOrders)
app.route("/:id").get(getSingleOrder).put(adminOnly,processOrder).delete(adminOnly,deleteOrder)

export default app;