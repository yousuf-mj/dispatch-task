import { model, Schema } from "mongoose";

const courierSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
        dropDups: true,
    },
    max_capacity: {
        type: Number,
        required: true,
    },
    inventory: {
        type: Number,
        min: 0,
    },
});

const CourierModel = model("Courier", courierSchema);

export { CourierModel };
