import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import { Link } from 'react-router-dom';

const Home = () => {

    // we are define set up title name [ then call useTitle costom hook ]
    useTitle("home")

    // input value store  State 
    const [activeStatus, setActiveStatus] = useState([])
    const [userInputDate, setUserInput] = useState([])


    // Active btn click show only status activ data

    const activeBtn = (Statusvalue) => {
        const ActiveStatus = userInputDate.filter(data => data.status === Statusvalue)
        setActiveStatus(ActiveStatus)
        // console.log(activeStatus)

    }
    // complited Btn click show only status activ data
    const complitedBtn = (Statusvalue) => {
        // console.log(Statusvalue)
        const ActiveStatus = userInputDate.filter(data => data.status === Statusvalue)
        setActiveStatus(ActiveStatus)
        // console.log(complitedStatus)

    }

    // complited All click show only status activ data
    const allUserDataBtn = () => {
        const userAllData = userInputDate?.map(data => data)

        const allData = userAllData.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        setActiveStatus(allData)
        // console.log(complitedStatus)

    }

    //all from submition
    const handelSubmitbtn = (event) => {

        event.preventDefault()

        //all input field
        const from = event?.target;
        const name = from?.name?.value;
        const status = from?.status?.value;

        //condition base 
        if (status === "active") {
            console.log("active")

        } else if (status === "completed") {
            console.log("Completed")
        } else {
            return alert('Write a valid status as active Or completed !')
        }

        const inputValue = {
            name: name,
            status: status
        }

        setUserInput(current => [...current, inputValue]);
        from.reset('')
    }


    return (
        <div className="h-[100vh] w-[100%] pt-[10%] ">

            <h1 className='text-3xl text-center pb-8 font-bold'>Problem - 01</h1>
            {/* // user input field */}
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center ">

                {/* ======================================= input fild ===================================== */}

                <form onSubmit={handelSubmitbtn} className='bg-gray-700 p-10 py-8 w-[70%] mx-auto flex justify-center items-center' >
                    <div className="block">
                        <h1 className='text-2xl text-white py-5'> User Form</h1>


                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text">User Name is </span>
                            </label>
                            <input type="text" name='name'
                                placeholder="Type Name" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text">Only Status is active Or completed </span>
                            </label>
                            <input type="text" name='status'
                                placeholder="Type Status" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="flex mt-5">
                            <button className='btn btn-primary px-10'>submit</button>
                        </div>
                    </div>
                </form>

                {/* <============================== Data synamic Btn Display Show=========================> */}

                <div className="show-User-Data items-start mt-5 md:mt-0">
                    <div className="flex justify-center">
                        <button value={"active"} onClick={() => activeBtn('active')} className="btn btn-primary">active</button>
                        <button value={"completed"} onClick={() => complitedBtn('completed')} className="btn btn-secondary mx-3">Completed</button>
                        <button onClick={() => allUserDataBtn()} className="btn btn-accent">All</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="block">
                            {
                                activeStatus?.map(data => {
                                    return <>
                                        <div className="content p-3 bg-[#2167f3] mt-3 flex justify-between">
                                            <h3 className=' text-white'>Name : {data?.name}   <span className='ml-4 text-white font-bold badge badge-accent py-3'> status : {data?.status}  </span> </h3>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <Link to={'/problem-2'}>
                    <button className='btn btn-success mt-8 text-2xl mr-2'> Next </button>
                </Link>
            </div>
        </div>


    );
};

export default Home;