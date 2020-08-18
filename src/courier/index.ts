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
            message: "Incorrect input",
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

const update = async (id: Number, capacity: Number) => {
    if (!Number.isInteger(capacity) && !Number.isInteger(id)) {
        return responseError(400, {
            success: false,
            message: "Incorrect input",
        });
    }

    try {
        const courier = await CourierModel.findOneAndUpdate(
            { id },
            { max_capacity: capacity },
            { new: true }
        );

        const message = {
            success: true,
            message: "Successfully updated",
            result: courier,
        };

        return responseSuccess(200, message);
    } catch (error) {
        console.error(error);
        const errorMessage = {
            success: false,
            message: "error with creating a new courier",
        };
        return responseError(400, errorMessage);
    }
};

interface filter {
    capacity_required: number;
}
const search = async (filter: filter) => {
    if (!filter.capacity_required) {
        return responseError(400, {
            success: false,
            message: "Incorrect input",
        });
    }

    const searchFilter = {
        max_capacity: filter.capacity_required,
    };

    try {
        const couriers = await CourierModel.find(searchFilter);
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

const findOne = async (id: number) => {
    try {
        const courier = await CourierModel.find({ id });
        const response = {
            success: true,
            results: courier,
        };

        return responseSuccess(200, response);
    } catch (e) {
        console.error(e);
        return responseError(400);
    }
};

export { getAll, create, update, search, findOne };
