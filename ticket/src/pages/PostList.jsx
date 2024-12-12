// src/components/PostList.jsx
import React, { useEffect, useState } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch posts from Laravel API
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/posts/view', {
                    method: 'GET', // GET method to fetch data
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch xc');
                }

                const data = await response.json();
                setPosts(data); // Set the posts data to state
            } catch (err) {
                setError('Failed to fetch pos           ts'); // Handle any errors
            } finally {
                setLoading(false); // Stop loading once the data is fetched
            }
        };

        fetchPosts(); // Call the function to fetch posts
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    if (error) {
        return <div>{error}</div>; // Error state
    }

    return (
        <div className="container mt-4">
            <h1>Post List</h1>
            <div className="list-group">
                {posts.map((post) => (
                    <div key={post.id} className="list-group-item">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
