import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link'; 
import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Header() {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };

  return (
    <header className={styles.header}>
      <Navbar className='space-x-0 flex gap-x-60 items-center flex-wrap flex-auto' >
        <Navbar.Brand href="/">
          <Image src="/logo.png" alt="Organiza Logo" width={40} height={40} priority />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className="p-20 w-full flex flex-wrap items-center justify-between py-5 px-2 flex-1 place-content-center">
            <Nav className="me-auto flex-initial" >
              <Link href="/incomes" passHref className={styles.button} aria-label="Receitas">Receitas</Link>
              <Link href="/outcomes" passHref className={styles.button} aria-label="Despesas">Despesas</Link>
              <Link href="/Investments" passHref className={styles.button} aria-label="Investimentos">Investimentos</Link>
            </Nav>
            <Nav className="me-auto">
              <Link href="/login" passHref className={styles.button} aria-label="Entrar">Entrar</Link>
              <Link href="/Cadastro" passHref className={styles.button} aria-label="Inscrever-se">Cadastre-se</Link>
              <button className={styles.button} aria-label="Configurações" onClick={handleSettingsClick}>Configurações</button>
            </Nav>
          </Container>
        </Navbar.Collapse>
        {showSettings && (
          <Container className={styles.settingsBox}>

            <Link href="/configuracoes" passHref>
            <button className={styles.settingsButton}>Configurações de Notificações</button>
            </Link>

            <Link href="/Grafico" passHref>
            <button className={styles.settingsButton}>Gráficos</button>
            </Link>
            <Link href="/receitasDespessas" passHref>
            <button className={styles.settingsButton}>Relatórios</button>
            </Link>
          </Container>
        )}
      </Navbar>
    </header>
  );
}
