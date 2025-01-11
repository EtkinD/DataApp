interface RegisterRequest {
    username: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
}

interface LoginRequest {
    username: string;
    password: string;
}

export { LoginRequest, RegisterRequest };
