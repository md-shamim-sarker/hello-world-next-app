import {useRouter} from 'next/router';
import React from 'react';

const BlogId = () => {
    const router = useRouter();
    const blogId = router.query.blogId;
    return (
        <div>
            <h2>This is blog details. {blogId}</h2>
        </div>
    );
};

export default BlogId;