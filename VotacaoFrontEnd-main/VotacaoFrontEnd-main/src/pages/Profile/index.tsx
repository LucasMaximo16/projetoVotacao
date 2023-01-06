import styles from './styles.module.sass';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';

export interface IUsers {
  id: number;
  name: string;
  email: string;
}
const usersArray = [
  {
    id: 1,
    name: 'Usuario 1',
    email: ''
  }
];

export function Profile() {
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
      <div className={styles.mainPage}>
        <div className={styles.card}>
          {users.map((user) => (
            <Card key={user.id} user={user} totalVotes={1} />
          ))}
        </div>
      </div>
    </>
  );
}
