import styles from '../styles/Investments.module.css';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

export default function Investments() {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Evolução do Patrimônio',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const pieData = {
    labels: ['Ações', 'FIIs'],
    datasets: [
      {
        data: [65, 35,],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1>Investimentos</h1>
      <div className={styles.chartContainer}>
        <div className={styles.barChart}>
          <h2>Evolução do Patrimônio</h2>
          <Bar data={barData} />
        </div>
        <div className={styles.pieChart}>
          <h2>Ativos na Carteira</h2>
          <Pie data={pieData} />
        </div>
      </div>
      <div className={styles.tables}>
        <div className={styles.table}>
          <h3>AÇÕES</h3>
          <table>
            <thead>
              <tr>
                <th>Ativo</th>
                <th>Preço Médio</th>
                <th>Preço Atual</th>
                <th>Variação</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABCD</td>
                <td>100,00</td>
                <td>110,00</td>
                <td>+10%</td>
                <td>R$ 1.100,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.table}>
          <h3>FIIS</h3>
          <table>
            <thead>
              <tr>
                <th>Ativo</th>
                <th>Preço Médio</th>
                <th>Preço Atual</th>
                <th>Variação</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EFGH</td>
                <td>200,00</td>
                <td>210,00</td>
                <td>+5%</td>
                <td>R$ 2.100,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}