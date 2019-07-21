import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Mínimo 3 caracteres')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Senhas devem ser iguais'
  ),
});

export default function Profile() {
  return (
    <Container>
      <Form schema={schema}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Salvar perfil</button>
      </Form>
    </Container>
  );
}
