import {ButtonHTMLAttributes} from "react";

export type ButtonProps = {
    level?: 'info' | 'success' | 'warn',
    children: string,
} & ButtonHTMLAttributes<HTMLButtonElement>
const MyButton = ({children, level = 'info', ...props}: ButtonProps) => {

    return (
        <button className={level} {...props}>{children}</button>
    )
}

export default MyButton;