import type React from "react";
import "@fontsource/rubik/500.css";
import "./Input.css";

type Variant = "text" | "password" | "email" | "number";

export interface InputProps {
    label?: string,
    type?: Variant,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: string,
}

export const InputField: React.FC<InputProps> = ({
    label = "",
    type = "text",
    placeholder = "",
    value = "",
    onChange = () => { },
    error = "",
}) => {
    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
            <input
                className="input-field"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                aria-invalid={!!error}
            />
            {error && <span role="alert" style={{ color: "red" }}>{error}</span>}
        </div>
    );
};