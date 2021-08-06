import React, { useRef, useCallback, useContext } from "react";
import { FiLogIn } from "react-icons/fi";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import * as Yup from "yup";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import getValidationErrors from "../../utils/getValidationErrors";

import { Container, Content, Background } from './style';

interface SingInFormData {
    email: string;
    senha: string;
}

const SigIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { singIn } = useAuth();
    const { addToast } = useToast();
    const handleSubmit = useCallback(async (data: SingInFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                    .required("E-mail obrigatório")
                    .email("Informe um e-mail válido"),
                senha: Yup.string().required("Senha obrigatória"),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await singIn({
                email: data.email,
                senha: data.senha
            });

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
            }
            addToast({
                type: 'error',
                title: 'Ocorreu um erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
            });
        }
    }, [singIn, addToast]);

    return (
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu login</h1>

                    <Input name="email" placeholder="E-mail" />
                    <Input name="senha" type="password" placeholder="Senha" />

                    <Button type="submit">Entrar</Button>

                    <a href="teste">Esqueci minha senha</a>
                </Form>

                <a href="teste"><FiLogIn />Criar conta</a>

            </Content>
            <Background />
        </Container>
    )
};

export default SigIn;