import {Link} from "react-router-dom";


export default function NotFound() {

    return (
        <div className="page not-found">
            <h1>404</h1>
            <h2>Page introuvable</h2>

            <p>La page que vous recherchez n'existe pas.</p>

            <Link to="/">Retour au Dashboard</Link>
        </div>
    )
}