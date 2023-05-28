import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Countrys = () => {

    const { id } = useParams();


    const [cetagoryCountry, setCetagoryContry] = useState();


    // useEffect(() => {
    //     fetch(`https://contact.mediusware.com/api/country-contacts/${id}`)
    //         .then(res => res.json())
    //         .then(data => console.log("data", data))
    // }, [])

    useEffect(() => {
        fetch(`https://contact.mediusware.com/api/country-contacts/Bangladesh/`)
            .then(res => res.json())
            .then(data => setCetagoryContry(data?.results))
    }, [])



    console.log(cetagoryCountry)

    return (
        <>

            <div className="w-[100%] h-[auto] bg-slate-50 ">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center py-28">

                    {cetagoryCountry?.map(c => {

                        return <>
                            <div className=" p-4 bg-gray-600 text-white flex justify-between mx-3 rounded-md">
                                <h1 className='text-white'>name : {c?.country?.name} </h1>
                                <h1 className='text-white'>phone {c?.phone}</h1>
                            </div>
                        </>
                    })}



                </div>

            </div>

        </>
    );
};

export default Countrys;