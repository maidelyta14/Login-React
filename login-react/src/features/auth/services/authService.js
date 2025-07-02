const API_URL = 'https://api.escuelajs.co/api/v1/users';

export const authenticateUser = async ({ email, password }) => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Error al conectar con el servidor');
    }

    const users = await response.json();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }

    return null;
};
