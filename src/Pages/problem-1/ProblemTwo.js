import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';

const ProblemTwo = () => {

    // Main Modal list
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);

    // all contacct btn
    const allContact = () => {
        setShowModalA(true)

    }
    // all contacct btn
    const UsContact = () => {
        setShowModalB(true)

    }

    // get data api
    const [AllcontactData, setAllContactData] = useState();
    const [UsContacts, setusContact] = useState();
    const [singelContact, setsingelContact] = useState();

    // Dynamic Modal Data lode all Modal list
    const [ModalA, setModalA] = useState(false);
    const [ModalB, setModalB] = useState(false);
    const [ModalC, setModalC] = useState(false);



    // all contact btn to get api data resive
    useEffect(() => {
        fetch(`https://contact.mediusware.com/api/contacts/`)
            .then(res => res.json())
            .then(data => setAllContactData(data?.results))
    }, [])



    //Modal A Clicking Btn to daynamic Data loade
    const allContacts = () => {
        setModalA(true)

    }
    //Modal A Clicking Btn to daynamic Data loade
    const usContacts = () => {
        setModalB(true)
        const usContacts = AllcontactData.filter(Us => Us?.country?.name === "United States")
        setusContact(usContacts)

    }

    // singel Contact 
    const singelContactBtn = (contact) => {
        setModalC(true)
        setModalA(false)
        setModalB(false)
        setsingelContact(contact)
    }



    return (
        <div className="h-[100vh] bg-gray-400 w-[100%] pt-[10%]">
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
                <div className="flex justify-center py-32 mx-10 bg-slate-500">
                    <button onClick={allContact} className='btn btn-primary'>All Contact</button>
                </div>
                <div className="flex justify-center py-32 mx-10 bg-slate-500">
                    <button onClick={UsContact} className='btn btn-primary'>US Contact</button>
                </div>
            </div>


            {/* Main Modal A = 01 */}
            {
                showModalA ? <>
                    <d
                        iv
                        className="justify-center w-[100%]  mx-auto items-center  md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    >
                        <div className="relative z-10  my-6 mx-auto max-w-3xl mt-40 w-[100%] ">
                            {/*content*/}
                            <div >
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-[auto] pb-10 px-10  bg-white outline-none focus:outline-none w-[100%]">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold text-black">
                                            Medius<span className="text-blue-600">ware</span>
                                        </h3>
                                        <button
                                            className="p-1 ml-auto border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModalA(false)}
                                        >
                                            <span className=" text-red-800  h-7 w-8 text-[32px] block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center mt-20">

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text  text-[#46139f]">All Contacts</span>
                                            </label>
                                            <button onClick={allContacts} className="btn  bg-[#ffffff] text-[#46139f] border-2 border-[#46139f] hover:bg-[#139e97]">Modal A</button>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text  text-[#7808c8]">US Contacts</span>
                                            </label>
                                            <button onClick={usContacts} className="btn hover:bg-[#028dc0] bg-[#2669f0] text-[#7808c8]">Modal B</button>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-[#46139f]">Close</span>
                                            </label>
                                            <button onClick={() => setShowModalA(false)} className="btn bg-[#ffffff] text-[#46139f] border-2 border-[#46139f] hover:bg-[#139e97]">Closing</button>
                                        </div>

                                    </div>



                                </div>

                            </div>

                        </div>
                    </d>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                    : null
            }
            {/* Main Modal B = 02 */}
            {
                showModalB ? <>
                    <d
                        iv
                        className="justify-center w-[100%]  mx-auto items-center  md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    >
                        <div className="relative z-10  my-6 mx-auto max-w-3xl mt-40 w-[100%] ">
                            {/*content*/}
                            <div >
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-[auto] pb-10 px-10  bg-white outline-none focus:outline-none w-[100%]">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold text-black">
                                            Medius<span className="text-blue-600">ware</span>
                                        </h3>
                                        <button
                                            className="p-1 ml-auto border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModalB(false)}
                                        >
                                            <span className=" text-red-800  h-7 w-8 text-[32px] block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center mt-20">

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text  text-[#46139f]">All Contacts</span>
                                            </label>
                                            <button onClick={allContacts} className="btn  bg-[#ffffff] text-[#46139f] border-2 border-[#46139f] hover:bg-[#139e97]">Modal A</button>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text  text-[#7808c8]">US Contacts</span>
                                            </label>
                                            <button onClick={usContacts} className="btn hover:bg-[#028dc0] bg-[#2669f0] text-[#7808c8]">Modal B</button>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-[#46139f]">Close</span>
                                            </label>
                                            <button onClick={() => setShowModalB(false)} className="btn bg-[#ffffff] text-[#46139f] border-2 border-[#46139f] hover:bg-[#139e97]">Closing</button>
                                        </div>

                                    </div>



                                </div>

                            </div>

                        </div>
                    </d>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                    : null
            }


            {/* <=============== children modal ====================> */}

            {/* Modal = A */}
            {
                ModalA ? <>
                    <d
                        iv
                        className="justify-center w-[100%]  mx-auto items-center  md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    >
                        <div className="relative z-[50] mx-auto max-w-3xl md:mt-[35%] mt-20 w-[100%] ">
                            {/*content*/}
                            <div >
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-[auto] px-10  bg-white outline-none focus:outline-none w-[100%]">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold text-black">
                                            Medius<span className="text-blue-600">ware</span>
                                        </h3>
                                        <button
                                            className="p-1   ml-auto border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setModalA(false)}
                                        >
                                            <span className=" text-red-800  h-7 w-8 text-[32px] block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    <h1 className='text-center text-black text-2xl font-bold'>This is modal A . All Contacts List</h1>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center mt-10 pb-8">

                                        {
                                            AllcontactData?.map(contact => {
                                                return <>
                                                    <div className="card px-2 py-1 flex justify-center bg-purple-800">
                                                        <p>country Name : {contact?.country?.name}</p>
                                                        <p>phone : {contact?.phone} </p>
                                                        <div className="flex justify-center mt-3">
                                                            <button onClick={() => singelContactBtn(contact)} className='px-1 py-1 bg-blue-600 text-white w-[100%] rounded-md'>Details</button>
                                                        </div>
                                                    </div>
                                                </>
                                            })
                                        }

                                    </div>



                                </div>

                            </div>

                        </div>
                    </d>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                    : null
            }
            {/* Modal = B */}
            {
                ModalB ? <>
                    <d
                        iv
                        className="justify-center w-[100%]  mx-auto items-center  md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    >
                        <div className="relative z-[50] mx-auto max-w-3xl md:mt-56 mt-20 w-[100%] ">
                            {/*content*/}
                            <div >
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-[auto] px-10  bg-white outline-none focus:outline-none w-[100%]">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold text-black">
                                            Medius<span className="text-blue-600">ware</span>
                                        </h3>
                                        <button
                                            className="p-1   ml-auto border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setModalB(false)}
                                        >
                                            <span className=" text-red-800  h-7 w-8 text-[32px] block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>

                                    <h1 className='text-center text-black text-2xl font-bold'>This is Modal B .  All US Contacts List</h1>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center mt-10 pb-8">

                                        {
                                            UsContacts?.map(contact => {
                                                return <>
                                                    <div className="card px-2 py-1 flex justify-center bg-purple-800">
                                                        <p>country Name : {contact?.country?.name}</p>
                                                        <p>phone : {contact?.phone} </p>
                                                        <div className="flex justify-center mt-3">
                                                            <button onClick={() => singelContactBtn(contact)} className='px-1 py-1 bg-blue-600 text-white w-[100%] rounded-md'>Details</button>
                                                        </div>
                                                    </div>
                                                </>
                                            })
                                        }

                                    </div>



                                </div>

                            </div>

                        </div>
                    </d>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                    : null
            }
            {/* Modal = C */}
            {
                ModalC ? <>
                    <d
                        iv
                        className="justify-center w-[100%]  mx-auto items-center  md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    >
                        <div className="relative z-[50] mx-auto max-w-3xl md:mt-[5%]  mt-20 w-[100%] ">
                            {/*content*/}
                            <div >
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-[70vh] px-10  bg-white outline-none focus:outline-none w-[100%]">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold text-black">
                                            Medius<span className="text-blue-600">ware</span>
                                        </h3>
                                        <button
                                            className="p-1  ml-auto border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setModalC(false)}
                                        >
                                            <span className=" text-red-800  h-7 w-8 text-[32px] block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>

                                    <h1 className='text-center text-black text-2xl font-bold'>Open Modal C. Singel Contacts Details</h1>

                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-5 justify-center mt-10 pb-8">

                                        <div className="card px-2 py-1 flex justify-center">
                                            <p className='text-center text-black'>country Name : {singelContact?.country?.name}</p>
                                            <p className='text-center text-black'>phone : {singelContact?.phone} </p>
                                        </div>

                                    </div>



                                </div>

                            </div>

                        </div>
                    </d>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                    : null
            }




        </div>
    );
};

export default ProblemTwo;