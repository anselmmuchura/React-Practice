import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div class="not-found">
            <h1>404 PAGE NOT FOUND</h1>
            <Link to="/">Go back to HomePage...</Link>
        </div>
    );
}

export default NotFound;