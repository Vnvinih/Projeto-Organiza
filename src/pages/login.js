import { useState } from "react";
import { useRouter } from "next/router";
import { FaUser, FaLock } from "react-icons/fa"; 
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; 
import styles from "../styles/Login.module.css"; 
import Loader from "../components/Loader"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); 
    setIsLoading(true); // Ativa a tela de carregamento

    // Simulação de autenticação
    setTimeout(() => {
      if (username === "admin@gmail.com" && password === "senha123") {
        router.push("/"); 
      } else {
        setErrorMessage("Usuário ou senha inválidos.");
      }
      setIsLoading(false); 
    }, 2000);
  };

  return (
    <main className={styles.mainContainer}>
      {isLoading && <Loader />} {/* Exibe o loader se isLoading for true */}
      <div className={styles.formBox}>
        <h1 className={styles.title}>ORGANIZA</h1>
        <h2 className={styles.subtitle}>Login</h2>

        {/* Exibe mensagem de erro se os dados forem inválidos */}
        {errorMessage && <p className={`${styles.message} ${styles.error}`}>{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          {/* Campo de usuário */}
          <div className={styles.inputContainer}>
            <span>
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Campo de senha */}
          <div className={styles.inputContainer}>
            <span>
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={styles.togglePassword}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          
          {/* Botão de login */}
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>

        <div className={styles.linksContainer}>
          <a href="/forgotpassword" className={styles.link}>
            Esqueceu sua senha?
          </a>
          <a href="/Cadastro" className={styles.link}>
            Cadastre-se agora!
          </a>
        </div>
      </div>
    </main>
  );
}
