import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link'; // Importação do componente Link
import { useState } from 'react';

export default function Header() {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Organiza Logo" width={40} height={40} priority />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.leftButtons}>
          <button className={styles.button} aria-label="Receitas">Receitas</button>
          <button className={styles.button} aria-label="Despesas">Despesas</button>
          <button className={styles.button} aria-label="Investimentos">Investimentos</button>
        </div>
        <div className={styles.rightButtons}>

          <Link href="/login" passHref>
          <button className={styles.button} aria-label="Entrar">Entrar</button>
          </Link>

          <Link href="/Cadastro" passHref>
            <button className={styles.button} aria-label="Inscrever-se">Cadastre-se</button>
          </Link>
          <button className={styles.button} aria-label="Configurações" onClick={handleSettingsClick}>Configurações</button>
        </div>
      </div>
      {showSettings && (
        <div className={styles.settingsBox}>

          <Link href="/configuracoes" passHref>
          <button className={styles.settingsButton}>Configurações de Notificações</button>
          </Link>

          <button className={styles.settingsButton}>Gráficos</button>
          <button className={styles.settingsButton}>Relatórios</button>
        </div>
      )}
    </header>
  );
}
