import React from 'react';
import useTitle from '../../hook/useTitle';

const Services = () => {
    // we are define set up title name [ then call useTitle costom hook ]
    useTitle("service")
    return (
        <div className="h-[100vh] bg-gray-800">
            this is services
        </div>
    );
};

export default Services;