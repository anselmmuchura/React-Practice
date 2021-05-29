import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {error && <div> {error} </div>}
            {isPending && <div className="loading">Loading</div>}
            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Author: {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}

        </div>
    );
}

export default BlogDetails;