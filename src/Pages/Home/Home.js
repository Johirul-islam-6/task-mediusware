import React from 'react';
import useTitle from '../../hook/useTitle';

const Home = () => {

    // we are define set up title name [ then call useTitle costom hook ]
    useTitle("home")

    return (
        <div className="h-[100vh] ">
            this is Home page
        </div>
    );
};

export default Home;