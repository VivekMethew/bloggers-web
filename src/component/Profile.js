import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
	let { userid } = useParams();
	console.log(userid);
	return (
		<div>
			<h1> This is profile page {userid} </h1>{' '}
		</div>
	);
}

export default Profile;
