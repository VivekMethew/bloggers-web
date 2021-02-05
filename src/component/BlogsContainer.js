import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogsContainer() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios.get('https://bloggp.herokuapp.com/blogs').then((res) => {
			console.log(res.data.blog);
			setBlogs(res.data.blog);
		});
	}, [blogs]);

	return (
		<div className="p-3">
			{blogs.map((blog) => {
				return (
					<div className="post_box border-bottom border-info mb-3" key={blog._id}>
						<h1 className="h3 text-capitalize">{blog.title}</h1>
						<p> {blog.createdAt} </p>
						<div className="justify-content-center">
							<div className="img-box d-100 pb-4 pt-3">
								<img src={blog.urls} height="350px" width="100%" alt="port img" />
							</div>
							<p>{blog.description}</p>
						</div>
						<p> Post By : {blog.author} </p>
					</div>
				);
			})}
		</div>
	);
}

export default BlogsContainer;
