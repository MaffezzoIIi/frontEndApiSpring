import React from "react";
import { useEffect } from "react";
import { FiAlertCircle, FiCheckCircle, FiCircle, FiInfo, FiXCircle } from "react-icons/fi";

import { ToastMessage, useToast } from "../../../hooks/toast";

import { Container } from "./style";

interface ToastProps {
    message: ToastMessage;
    style: object;
}

const icons = {
    info: <FiInfo size={20} />,
    error: <FiCircle size={20} />,
    success: <FiCheckCircle size={20} />
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, [removeToast, message.id])

    return (
        <Container type={message.type} hasDescription={!!message.description} style={style}>
            {icons[message.type || "info"]}

            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>

            <button>
                <FiXCircle size={20} onClick={() => removeToast(message.id)} />
            </button>
        </Container>
    );
};

export default Toast;