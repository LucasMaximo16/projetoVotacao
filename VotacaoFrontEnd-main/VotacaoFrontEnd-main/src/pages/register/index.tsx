import styles from './styles.module.sass';
import logoJackExperts from '../../assets/logoJackExperts.png';
import { registerInitialValues, registerSchema } from '../../utils/Formik/register';
import { useFormik } from 'formik';
import api from '../../services/api';

export function Register() {
  function handleSubmit(data: typeof registerInitialValues) {
    api
      .post('/user/', {
        name: data.nome,
        email: data.email,
        password: data.password
      })
      .then((result) => {
        console.log(result);
      })
      .catch((erro) => {
        console.log(erro);
      });
    console.log(data.nome, data.email, data.password, data.rePassword);
  }
  const formikProps = useFormik({
    initialValues: registerInitialValues,
    onSubmit: (data) => handleSubmit(data),
    validationSchema: registerSchema
  });

  return (
    <>
      <div className={styles.register}>
        <form onSubmit={formikProps.handleSubmit}>
          <div className={styles.cardRegister}>
            <div>
              <img src={logoJackExperts} alt="" className={styles.image} />
            </div>
            <div className={styles.textfield}>
              <label>Nome</label>
              <input
                type="text"
                placeholder="nome"
                name="nome"
                className={styles.input}
                onChange={formikProps.handleChange}
              />
            </div>
            <div className={styles.textfield}>
              <label>Email</label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className={styles.input}
                onChange={formikProps.handleChange}
              />
            </div>
            <div className={styles.textfield}>
              <label>Senha</label>
              <input
                type="password"
                placeholder="senha"
                name="password"
                className={styles.input}
                onChange={formikProps.handleChange}
              />
            </div>
            <div className={styles.textfield}>
              <label>Verificação de Senha</label>
              <input
                type="password"
                placeholder="repeat passowrd"
                name="rePassword"
                className={styles.input}
                onChange={formikProps.handleChange}
              />
            </div>
            <button className={styles.btn} type="submit">
              Registrar-se
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
