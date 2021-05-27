import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams();
    return ( 
        <div className="blog-detail">
            <h2>Blog Details</h2>
            <p>Blog number {id}</p> 
        </div>
     );
}
 
export default BlogDetails;