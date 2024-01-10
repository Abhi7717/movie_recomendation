import express from 'express'
// const express=require('express');
import cors from "cors"
// const cors=require("cors");
import reviews from "./api/reviews.route.js"
// const reviews=require("./api/reviews.route.js");
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/v1/reviews",reviews)
app.use("*", (req,res) => res.status(404).json({error:"not found"}))

export default app