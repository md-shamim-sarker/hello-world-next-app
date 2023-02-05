import {useRouter} from 'next/router';
import React from 'react';

const ReviewDetails = () => {
    const router = useRouter();
    const {productId, reviewId} = router.query;
    return (
        <div>
            <h2>product Id is {productId}</h2>
            <h2>review Id is {reviewId}</h2>
        </div>
    );
};

export default ReviewDetails;