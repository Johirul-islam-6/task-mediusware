import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [checkbox, setCheckbox] = useState(false)
    const [contactID, setAllContactID] = useState()


    const CheckBoxClick = () => {
        setCheckbox(true)
    }

    // country loade 
    useEffect(() => {

        fetch(`https://contact.mediusware.com/api/contacts/`)
            .then(res => res.json())
            .then(data => setAllContactID(data?.results))
    }, [])




    return (
        <>
            <footer className="px-4  divide-y-2 bg-white text-gray-800 mt-20">
                <div className="container flex flex-col justify-end mx-auto space-y-8 lg:flex-row lg:space-y-0">

                    <form className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text pr-2">Onley even</span>
                            <input onClick={() => CheckBoxClick()} type="checkbox" className="checkbox checkbox-success" />
                        </label>
                    </form>
                    {
                        checkbox ? <>

                            <div className="div w-[15%] h-[auto] bg-slate-700 absolute top-[80%] right-[10%]">

                                <div className="flex justify-between px-3 py-2">
                                    <h1 className='text-white pt-2'>All Countris ID</h1>
                                    <div onClick={() => setCheckbox(false)} className="text-2xl text-rose-700 cursor-pointer font-bold">x</div>

                                </div>
                                <div className="d">
                                    {
                                        contactID?.map(Id => <h1 className='text-white px-5'>{Id?.id}</h1>)
                                    }
                                </div>

                            </div>

                        </> : null
                    }

                </div>
                <div className="py-6 text-sm text-center dark:text-gray-400">© 2023 Mediusware. All Rights Reserved</div>
            </footer>
        </>
    );
};

export default Footer;