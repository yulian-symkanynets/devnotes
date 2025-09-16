import type React from "react";
import "@fontsource/rubik/500.css";
import "./Input.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


type Variant = "text" | "password" | "email" | "number";

export interface InputProps {
    label?: string,
    type?: Variant,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: string,
    isHidden?: boolean,
}

export const InputField: React.FC<InputProps> = ({
    label = "",
    type = "text",
    placeholder = "",
    value = "",
    onChange = () => { },
    error = "",
    isHidden = true,
}) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(isHidden);
    
    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
            <div className="input-button-group">
                <input
                    className="input-field"
                    type={type === "password" && !isPasswordVisible ? "text" : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    aria-invalid={!!error}
                />
                {type === "password" && <span className="password-show" onClick={() => { setIsPasswordVisible(!isPasswordVisible); }}>{isPasswordVisible ? <FaEyeSlash size={20} color="black" /> : <FaEye size={20} color="black"/>}</span>}
            </div>
            
            {error && <span role="alert" style={{ color: "red" }}>{error}</span>}
        </div>
    );
};