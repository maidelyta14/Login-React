const API_URL = 'https://api.escuelajs.co/api/v1';

export const authenticateUser = async ({ email, password }) => {
    const validUser = {
        id: 1,
        name: 'John Doe',
        email: 'john@mail.com',
        password: 'badbunny',
        role: 'admin',
        avatar: 'https://i.pravatar.cc/150?img=1'
    };

    if (email === validUser.email && password === validUser.password) {
        const { password, ...userWithoutPassword } = validUser;
        return userWithoutPassword;
    }

    return null;
};

