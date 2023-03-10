import {useRouter} from 'next/router';
import React from 'react';

const Doc = () => {
    const router = useRouter();
    const {params = []} = router.query;
    console.log(params);
    if(params.length === 2) {
        return (
            <h2>Feature {params[0]} & Concept {params[1]}</h2>
        );
    } else if(params.length === 1) {
        return (
            <h2>Feature {params[0]}</h2>
        );
    }
    return (
        <h2>Documentation details.</h2>
    );
};

export default Doc;