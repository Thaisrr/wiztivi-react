export const Child1 = (props: {message: string}) => {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    )
}

type Child2Props = {
    title: string,
    author: string
}
export const Child2 = ({title, author}: Child2Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>-- By {author}</p>
        </div>
    )
}

