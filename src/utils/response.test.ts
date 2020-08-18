import {
    responseSuccess,
    responseError,
    IResponseError,
    IErrorBody,
    IResponseSuccess,
    ISuccessBody,
} from "./response";

describe("Response Utils", () => {
    it("should return default error if no data input", () => {
        const response: IResponseError = responseError();
        expect(response.statusCode).toEqual(500);
        expect(response.body.message).toEqual("Error with request");
    });

    it("should return specific error message and status code", () => {
        const error: IErrorBody = {
            success: false,
            message: "Error",
        };

        const response: IResponseError = responseError(400, error);
        expect(response.statusCode).toEqual(400);
        expect(response.body.message).toEqual("Error");
    });

    it("should return default success if no data input", () => {
        const response: IResponseSuccess = responseSuccess();
        expect(response.statusCode).toEqual(200);
        expect(response.body.message).toEqual("your request was successful");
    });

    it("should return specific error message and status code", () => {
        const error: ISuccessBody = {
            success: true,
            message: "Successfully created",
        };

        const response: IResponseError = responseSuccess(201, error);

        expect(response.statusCode).toEqual(201);
        expect(response.body.message).toEqual("Successfully created");
    });
});
