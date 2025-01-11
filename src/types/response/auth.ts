import { BaseResponse } from './base_response';

class AuthResponse extends BaseResponse {
    token: string | null = null;

    setToken = (token: string) => {
        this.token = token;
        return this;
    };
}

const AuthResponseFactory = () => new AuthResponse();

export { AuthResponse, AuthResponseFactory };
