import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
    res.status(200).json({
        success: true,
    });
});

router.post("/lookup", (req, res) => {
    res.status(200).json({
        success: true,
    });
});

module.exports = router;
