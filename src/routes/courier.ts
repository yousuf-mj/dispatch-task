import express from "express";
import { create, getAll } from "../courier";
import { responseError, responseSuccess } from "../utils/response";
const router = express.Router();

interface response {
    statusCode: number;
    body: object;
}

router.post("/", async (req, res) => {
    const capacity = req.body.max_capacity;
    const id = req.body.id;
    try {
        const createCourier = await create(id, capacity);
        res.status(createCourier.statusCode).json(createCourier.body);
    } catch (error) {
        console.error(error);
        res.status(400).json(responseError());
    }
});

router.get("/lookup", async (req, res) => {
    const all: response = await getAll();

    res.status(all.statusCode).json(all.body);
});

module.exports = router;
