import { CourierModel } from "../db/courierSchema";
import mockingoose from "mockingoose";

describe("Courier endpoint", () => {
    it("should return all couriers", async () => {
        const _doc = [
            {
                _id: "607f191e810c19729de861ea",
                id: 1,
                max_capacity: 20,
            },
            {
                _id: "507f191e810c19729de860ea",
                id: 2,
                max_capacity: 20,
            },
        ];

        mockingoose(CourierModel).toReturn(_doc, "find");

        return CourierModel.find().then((doc) => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        });
    });

    it.only("should create a new courier", async () => {
        const _doc = {
            _id: "211f191e810c19729de861ea",
            id: 1,
            max_capacity: 20,
        };

        mockingoose(CourierModel).toReturn(_doc, "save");

        const mockData = {
            id: 1,
            max_capacity: 20,
        };

        return CourierModel.create(mockData).then((doc) => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        });
    });
});
