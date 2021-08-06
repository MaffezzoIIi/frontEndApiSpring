import React from "react";
import { useTransition } from "react-spring";

import { Container } from "./style";

import Toast from "./Toast";

import { ToastMessage } from "../../hooks/toast"

interface ToastContainerProps {
    message: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ message }) => {
    const messageWithTransitions = useTransition(
        message,
        (message) => message.id,
        {
            from: { right: "0%", opacity: 0 },
            enter: { right: "0%", opacity: 1 },
            leave: { right: "0%", opacity: 0 },
        }
    );

    return (
        <Container>
            {messageWithTransitions.map(({ item, key, props }) => (
                <Toast key={key} style={props} message={item} />
            ))}
        </Container>
    );
};

export default ToastContainer;