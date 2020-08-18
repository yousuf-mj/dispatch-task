import express from "express";
import { create, getAll, update, search, findOne } from "../courier";
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

router.get("/lookup/:id", async (req, res) => {
    const id = Number(req.params.id);
    const all: response = await findOne(id);

    res.status(all.statusCode).json(all.body);
});

router.get("/lookup", async (req, res) => {
    const all: response = await search(req.body);

    res.status(all.statusCode).json(all.body);
});

router.get("/", async (req, res) => {
    const all: response = await getAll();

    res.status(all.statusCode).json(all.body);
});

router.patch("/:id", async (req, res) => {
    const id: number = Number(req.params.id);
    const capacity = req.body.max_capacity;

    try {
        const updateCourier: response = await update(id, capacity);

        res.status(updateCourier.statusCode).json(updateCourier.body);
    } catch (error) {
        console.error(error);
        res.status(400).json(responseError());
    }
});

module.exports = router;
