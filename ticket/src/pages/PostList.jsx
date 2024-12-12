import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1 className="mb-4">Post List</h1>
            <div className="list-group">
                {posts.map((post) => (
                    <div key={post.id} className="list-group-item mb-3">
                        <h3 className="mb-2">{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
