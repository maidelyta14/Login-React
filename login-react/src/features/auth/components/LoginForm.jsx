import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';


const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => password.length >= 4;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { login, isLoading, error } = useAuth();

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validateEmail(value) ? '' : 'Ingresa un email válido');
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validatePassword(value) ? '' : 'Mínimo 4 caracteres');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Ingresa un email válido');
            valid = false;
        }

        if (!validatePassword(password)) {
            setPasswordError('Mínimo 4 caracteres');
            valid = false;
        }

        if (!valid) return;
        await login({ email, password });
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit} noValidate>
                <h2>Iniciar Sesión</h2>

                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        className={emailError ? 'input-error' : ''}
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        placeholder="usuario@ejemplo.com"
                    />
                    {emailError && <span className="field-error">{emailError}</span>}
                </div>
        

                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        className={passwordError ? 'input-error' : ''}
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        placeholder="Tu contraseña"
                    />
                    {passwordError && <span className="field-error">{passwordError}</span>}
                </div>

                <button type="submit" disabled={isLoading} className="login-button">
                    {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
                </button>
            </form>
        </div>
    );
};
export default LoginForm;
