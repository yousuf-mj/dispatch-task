export interface IResponseError {
    statusCode: number;
    body: IErrorBody;
}

export interface IErrorBody {
    success: boolean;
    message: string;
    error?: object;
}

export interface IResponseSuccess {
    statusCode: number;
    body: ISuccessBody;
}

export interface ISuccessBody {
    success: boolean;
    message: string;
    result?: object;
}

export const responseSuccess = (
    statusCode: number = 200,
    data?: ISuccessBody
): IResponseSuccess => {
    const defaultSuccess: ISuccessBody = {
        success: true,
        message: "your request was successful",
    };

    const response = data || defaultSuccess;

    return {
        statusCode,
        body: response,
    };
};

export const responseError = (
    statusCode: number = 500,
    data?: IErrorBody
): IResponseError => {
    const defaultError: IErrorBody = {
        success: false,
        message: "Error with request",
    };

    const response: IErrorBody = data || defaultError;

    return {
        statusCode,
        body: response,
    };
};
