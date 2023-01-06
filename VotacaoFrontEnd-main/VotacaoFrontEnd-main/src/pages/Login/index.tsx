import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import logoJackExperts from '../../assets/logoJackExperts.png';
import { loginInitialValues, loginSchema } from '../../utils/Formik/Login';
import styles from './styles.module.sass';

export function Login() {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  function handleSubmit(values: any) {
    console.log(values.email, values.password);
  }

  const formikProps = useFormik({
    initialValues: loginInitialValues,
    onSubmit: (values) => handleSubmit(values),
    validationSchema: loginSchema
  });

  return (
    <div className={styles.login}>
      <div className={styles.leftLogin}>
        <img src={logoJackExperts} alt="" className={styles.imagem} />
      </div>
      <div className={styles.rightLogin}>
        <div className={styles.cardLogin}>
          <form onSubmit={formikProps.handleSubmit}>
            <h1>Login</h1>
            <div className={styles.textfield}>
              <label htmlFor="email">Email</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Email"
                name="email"
                onChange={formikProps.handleChange}
              />
            </div>
            <div className={styles.textfield}>
              <label htmlFor="Senha">Senha</label>
              <input
                className={styles.input}
                type="password"
                name="password"
                placeholder="Password"
                onChange={formikProps.handleChange}
              />
            </div>
            <Link to="/register">Registre-se</Link>
            <button className={styles.btnLogin} type="submit">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
