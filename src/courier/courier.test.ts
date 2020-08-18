import axios, { AxiosResponse } from "axios";
import { getAll } from "./index";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Courier endpoint", () => {
    it("GET should return all info for couriers", async () => {
        const mockResponse = {
            success: true,
        };

        mockedAxios.get.mockResolvedValue(mockResponse);

        const response = await getAll();

        expect(response.success).toBeTruthy();
    });

    it("should create a new courier entry", async () => {});
});
