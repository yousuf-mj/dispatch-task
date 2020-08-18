import { CourierModel } from "../db/courierSchema";
import { responseSuccess, responseError } from "../utils/response";

const getAll = async () => {
    try {
        const couriers = await CourierModel.find({});
        const response = {
            success: true,
            results: couriers,
        };

        return responseSuccess(200, response);
    } catch (e) {
        console.error(e);
        return responseError(400);
    }
};

const create = async (id: Number, capacity: Number) => {
    if (!Number.isInteger(capacity) && !Number.isInteger(id)) {
        return responseError(400, {
            success: false,
            message: "incorrect input",
        });
    }

    try {
        const courier = new CourierModel({
            id: id,
            max_capacity: capacity,
        });

        await courier.save();

        const message = {
            success: true,
            result: courier,
        };

        return responseSuccess(201, message);
    } catch (e) {
        console.error(e);
        const errorMessage = {
            success: false,
            message: "error with creating a new courier",
        };
        return responseError(400, errorMessage);
    }
};
export { getAll, create };
