type Props = {
    level: "error" | "warning" | "info" | "success",
    children: React.ReactNode
}

export const Message = ({level, children}: Props) => {

    return (
        <div role="alert" className={`alert alert-${level}`}>
            {children}
        </div>
    )
}
