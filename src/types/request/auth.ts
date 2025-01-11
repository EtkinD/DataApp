interface RegisterRequest {
    username: string;
    name: string;
    last_name: string;
    email: string;
    password: string;
}

interface LoginRequest {
    username: string;
    password: string;
}

export { LoginRequest, RegisterRequest };
