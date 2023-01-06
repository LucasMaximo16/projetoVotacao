import { useState } from 'react';
import { IUsers } from '../../pages/Home';
import styles from './styles.module.sass';

interface CardProps {
  user: IUsers;
  totalVotes?: number;
}
type IVote = 'card' | 'vote' | 'view';
export function Card({ user, totalVotes }: CardProps) {
  const [state, setState] = useState<IVote>('card');

  return (
    <div className={styles.card}>
      {state === 'card' && <span> DADOS DO USUARIO</span>}
      {state === 'vote' && <span> VOTAR</span>}
      {state === 'view' && <span> VISUALIZAR OS VOTOS</span>}
    </div>
  );
}
