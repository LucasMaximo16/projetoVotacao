import styles from './styles.module.sass';
import { AiOutlineUser } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import logoJackExperts from '../../assets/logoJackExperts.png';
import api from '../../services/api';
import { useEffect, useState } from 'react';

export interface IUsers {
  id: number;
  name: string;
  email: string;
}
const usersArray = [
  {
    id: 0,
    name: '',
    email: ''
  }
];

export function Home() {
  const [users, setUser] = useState<IUsers[]>(usersArray);

  useEffect(() => {
    async function listUsers() {
      const user = await api.get('/user/').then((result) => {
        return result.data;
      });
      setUser(user);
    }

    listUsers();
  }, []);
  return (
    <>
      <div className={styles.navbar}>
        <nav>
          <img src={logoJackExperts} alt="" />
        </nav>
      </div>
      <div className={styles.mainPage}>
        <div className={styles.card}>
          <div className={styles.right}>
            <div className={styles.imagem}>
              <AiOutlineUser size={45} color="#fde910" />
            </div>
            <div className={styles.name}>
              <p>Lucas</p>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.comments}>
              <input type="text" name="comentario" />
              <button type="submit">
                <FiSend size={25} color="#000" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
