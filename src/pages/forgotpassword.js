import { useState } from "react"; 
import { FaEnvelope } from "react-icons/fa";
import styles from "../styles/ForgotPassword.module.css"; 
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function ForgotPassword() {
  const [email, setEmail] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Validação do email
    if (!email.includes("@gmail.com")) {
      setErrorMessage("Por favor, insira um email válido.");
    } else {
      // Simula o envio do e-mail e redireciona para a página de alteração de senha
      router.push("/alterarsenha");
    }
  };

  return (
    <main className={`${styles.mainContainer} ${inter.className}`}>
      <div className={styles.formBox}>
        <div className={styles.formHeader}>
          <h1>ORGANIZA</h1>
          <h2>Esqueci Senha</h2>
          <p>
            Para redefinir sua senha, informe o usuário ou e-mail cadastrado na
            sua conta e lhe enviaremos um e-mail com as instruções.
          </p>
        </div>
        {/* Exibe a mensagem de erro se houver */}
        {errorMessage && <p className={`${styles.message} ${styles.error}`}>{errorMessage}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <span>
              <FaEnvelope />
            </span>
            <input
              type="text"
              placeholder="E-mail ou usuário"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
            />
          </div>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
