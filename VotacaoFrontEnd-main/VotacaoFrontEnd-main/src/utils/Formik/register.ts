import * as Yup from 'yup';

const registerInitialValues = { nome: '', email: '', password: '', rePassword: '' };
const registerSchema = Yup.object().shape({
  nome: Yup.string(),
  email: Yup.string().email('Email Invalido').min(8, 'Email Invalido').max(124, 'Email Invalido'),
  password: Yup.string().min(8, 'Senha Invalida').max(32, 'Senha Invalida'),
  rePassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Os campos de frase de segurança e repetição de frase de segurança não conferem.'
  )
});
export { registerInitialValues, registerSchema };
