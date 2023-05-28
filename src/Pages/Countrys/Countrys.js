import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Countrys = () => {

    const { id } = useParams();


    const [cetagoryCountry, setCetagoryContry] = useState();
    const [loding, setLodaing] = useState(true);


    // useEffect(() => {
    //     fetch(`https://contact.mediusware.com/api/country-contacts/${id}`)
    //         .then(res => res.json())
    //         .then(data => console.log("data", data))
    // }, [])

    useEffect(() => {
        fetch(`https://contact.mediusware.com/api/country-contacts/${id}/`)
            .then(res => res.json())
            .then(data => setCetagoryContry(data?.results))

        setLodaing(false)
    }, [])



    if (loding) {
        return <>
            <div className="w-[100%] h-[100vh] justify-center flex items-center">
                <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center bg-[#0000004d]">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-blue-700"></div>
                </div>
            </div>
        </>
    }



    return (
        <>

            <div className="w-[100%] h-[auto] bg-slate-50 py-28">

                <h1 className='text-3xl py-5 text-center'>All {cetagoryCountry[0]?.country?.name} Contrys list</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center ">


                    {cetagoryCountry?.map(c => {

                        return <>
                            <div key={c?.id} className=" p-4 bg-gray-600 text-white flex justify-between mx-3 rounded-md">
                                <h1 className='text-white'>name : {c?.country?.name} </h1>
                                <h1 className='text-white'>phone {c?.phone}</h1>
                            </div>
                        </>
                    })}



                </div>

                <div className="w-[100%] mt-10 flex justify-center">
                    <div className="btn-group w-[30%] flex justify-center">
                        <button className="btn btn-active">1</button>
                        <button className="btn ">2</button>
                        <button className="btn">3</button>
                        <button className="btn">4</button>
                        <button className="btn">5</button>
                        <button className="btn">6</button>
                        <button className="btn">7</button>
                        <button className="btn">8</button>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Countrys;