import styles from './styles.module.sass';
import logoJack from '../../assets/logoJackExperts.png';
export function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={logoJack} alt="" />
    </div>
  );
}
