import { useState } from 'react';
import styles from '../styles/Cadastro.module.css'; // Arquivo CSS para esta página
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importação dos ícones
import { useRouter } from "next/router";

export default function Cadastro() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        email: '',
        senha: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário enviado:', formData);
        router.push("/login");
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>CADASTRO</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Nome:
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </label>
                    <label className={styles.label}>
                        CPF:
                        <input
                            type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </label>
                    <label className={styles.label}>
                        Data de Nascimento:
                        <input
                            type="date"
                            name="dataNascimento"
                            value={formData.dataNascimento}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </label>
                    <label className={styles.label}>
                        Telefone:
                        <input
                            type="tel"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </label>
                    <label className={styles.label}>
                        E-mail:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </label>
                    <label className={styles.label}>
                        Senha:
                        <div className={styles.passwordContainer}>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="senha"
                                value={formData.senha}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className={styles.passwordToggle}
                                aria-label="Mostrar ou ocultar senha"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </label>
                    <button type="submit" className={styles.button}>Cadastrar</button>
                    
                    <div className={styles.linksContainer}>
                    <a href="/login" className={styles.link}>
                        Já possui cadastro? Acesse agora!
                        </a>
                    </div>

                </form>
            </header>
        </div>
    );
}
