import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-pag">
            <h1>Oops you've found a page that does exist!</h1>
            <p> An unexpected error has occured </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}