import {useLocation, useParams, useSearchParams} from "react-router-dom";

const Router = ({title}: {title: string}) => {

    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    const {state} = useLocation();

    return (
        <>
            <h1>{title}</h1>
            <p>Query Param (id): {id}</p>
            <p>Search Param (Name) : {name}</p>
            <p>State: {state?.message}</p>
        </>
    )
}

export default Router;