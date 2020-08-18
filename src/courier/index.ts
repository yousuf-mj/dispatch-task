import mongoose from "mongoose";
import { CourierModel } from "../db/courierSchema";
import { responseSuccess, responseError } from "../utils/response";

const getAll = async () => {
    return {
        success: true,
    };
};

const create = async (capacity: Number) => {
    if (!Number.isInteger(capacity)) {
        return responseError(
            {
                success: false,
                error: "incorrect input",
            },
            400
        );
    }

    try {
        new CourierModel({
            max_capacity: capacity,
        }).save();

        return;
    } catch (e) {
        console.error(e);
        const errorMessage = {
            success: false,
            error: "error with creating a new courier",
        };
        return responseError(errorMessage, 400);
    }
};
export { getAll };
