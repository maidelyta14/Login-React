import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
    const { user, logout } = useAuth();  

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Panel de Control</h1>
                <button className="logout-button" onClick={logout}>
                    Cerrar Sesión
                </button>
            </div>

            <div className="dashboard-content">
                <div className="user-info">
                    <h2>Información del Usuario</h2>
                    
                    {user?.avatar && (
                        <div className="user-avatar">
                            <img src={user.avatar} alt={`Avatar de ${user.name}`} />
                        </div>
                    )}
                    <p><strong>Nombre:</strong> {user?.name}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <p><strong>ID:</strong> {user?.id}</p>
                    <p><strong>Rol:</strong> {user?.role}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;