import { Link }  from 'react-router-dom';

const Nav = () => {
    return ( 
        <div className="nav">
            <h1>Anselmo Blog</h1>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Add Post</Link></li>
            </ul>
        </div>
     );
}
 
export default Nav;