import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">StockFlow</Link>

            <div className="nav-links">
                <Link to="/" >Dashboard</Link>
                <Link to="/products" >Produits</Link>
                <Link to="/products/new" >Ajouter</Link>
            </div>
        </nav>
    )
}