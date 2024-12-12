import React, { useState } from 'react';
import axios from '../api/axios';

const PostForm = () => {
    const [formData, setFormData] = useState({ title: '', content: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/posts/view', formData);
            alert('Post created successfully!');
        } catch (error) {
            console.error('Failed to create post:', error.response?.data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea
                    id="content"
                    name="content"
                    className="form-control"
                    placeholder="Content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
    );
};

export default PostForm;
