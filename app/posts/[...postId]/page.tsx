import React from 'react';

const PostDetail = ({ params }: { params: { postId: string } }) => {
	return <div>Post {params.postId[0]}</div>;
};

export default PostDetail;
