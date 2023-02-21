import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="bg-dark text-light vh-100 vw-100 py-5" >
        <div  className="d-flex justify-content-center align-items-center h-100 flex-column container border-bottom border-danger rounded">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-secondary">
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    </div>
  );
}