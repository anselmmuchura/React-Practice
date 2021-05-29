import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('anselm');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author }

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added!');
            setIsPending(false);
            history.push('/');
        })


    }

    return (
        <div className="create">
            <h3>Add a new Blog</h3>
            <form action="" onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Content</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                <label>Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="anselm">Anselm</option>
                    <option value="esther">Esther</option>
                </select>

                {!isPending && <button>Post</button>}
                {isPending && <p>Posting blog!</p>}
            </form>
        </div>
    );
}

export default Create;