import styles from "../styles/AlterarSenha.module.css";
import { useState } from "react";
import { Inter } from "next/font/google";
import { FaLock, FaEyeSlash, FaEye } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function AlterarSenha() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!newPassword || !confirmPassword) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("As senhas não correspondem.");
      return;
    }

    if (newPassword === "senha123") {
      setSuccessMessage("Senha alterada com sucesso!");
    } else {
      setErrorMessage("Usuário ou senha inválidos.");
    }
  };

  return (
    <main className={`${styles.mainContainer} ${inter.className}`}>
      <div className={styles.formBox}>
        <div className={styles.formHeader}>
          <h1>ORGANIZA</h1>
          <h2>Alterar Senha</h2>
          <p>Confirmamos que era você! Crie uma nova senha logo abaixo.</p>
        </div>
        {errorMessage && <p className={`${styles.message} ${styles.error}`}>{errorMessage}</p>}
        {successMessage && <p className={`${styles.message} ${styles.success}`}>{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <span>
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <span>
              <FaLock />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme sua nova senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <button type="submit" className={styles.button}>
            Alterar Senha
          </button>
          <div className={styles.linksContainer}>
                    <a href="/login" className={styles.link}>
                        Acessar conta!
                        </a>
                    </div>

        </form>
      </div>
    </main>
  );
}
