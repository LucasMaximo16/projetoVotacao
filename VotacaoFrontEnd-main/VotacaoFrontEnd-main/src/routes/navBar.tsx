import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import styles from './styles.module.sass';

export function LayoutWithNavbar() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Outlet />
    </div>
  );
}
