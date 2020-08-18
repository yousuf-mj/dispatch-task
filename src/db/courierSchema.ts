import { model, Schema } from "mongoose";

const courierSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
    id: {
        type: Number,
    },
    max_capacity: {
        type: Number,
    },
});

const CourierModel = model("Courier", courierSchema);
export { CourierModel };
