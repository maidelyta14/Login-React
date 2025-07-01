import { useAuth } from "../../auth/hooks/useAuth";

const DashboardPage = () => {
    const { user, logout } = useAuth();

    return (
        <div className="dashboard-page">
            <h2>Bienvenido, {user?.name || 'Usuario'}!</h2>
            {user?.avatar && (
                <div className="user-avatar">
                    <img src={user.avatar} alt={`Avatar de ${user.name}`} />
                </div>
            )}
            <p>ID: {user?.id}</p>
            <p>Nombre: {user?.name}</p>
            <p>Rol: {user?.role}</p>
            <p>Email: {user?.email}</p>

            <button onClick={logout}>Cerrar sesión</button>
        </div>
    );
};

export default DashboardPage;
