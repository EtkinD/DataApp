
class BaseResponse {
    status: number = 0;
    success: boolean = true;
    message: string = '';

    setStatus = (status: number) => {
        this.status = status;
        return this;
    }

    setSuccess = (success: boolean) => {
        this.success = success;
        return this;
    }

    setMessage = (message: string) => {
        this.message = message;
        return this;
    }
}

const BaseResponseFactory = () => new BaseResponse()

export { BaseResponse, BaseResponseFactory };