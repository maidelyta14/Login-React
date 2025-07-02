const API_URL = 'https://api.escuelajs.co/api/v1/users';

export const authenticateUser = async ({ email }) => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Error al conectar con el servidor');
    }

    const users = await response.json();
    const user = users.find(u => u.email === email);

    if (user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar
        };
    }

    return null;
};
