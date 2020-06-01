import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string()
    .min(6, 'Senha muito curta')
    .required('A senha é obrigatória.'),
});

export default schema;
