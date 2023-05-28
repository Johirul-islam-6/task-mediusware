import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UseContext';


const Header = () => {
    //import userContext(AuthContext)
    const { user, userLogOut } = useContext(AuthContext)

    const logoutBtn = () => {
        userLogOut()
            .then(() => toast.warn('User Log Out !.'))
            .catch(error => console.log(error))
    }



    return (
        <>

            <div className="navbar bg-white lg:px-10 py-4">
                {/* -------------navbar start------------ */}
                <div className="navbar-start ">
                    <div className='hidden lg:block'>
                        <div className='flex'>
                            <Link to='/' className=" normal-case text-xl w-[100%]">
                                <img className='w-[80%]' src='https://mediusware.com/assets/logo.17d47cfe.svg' alt="" />
                            </Link>

                        </div>
                    </div>
                    {/* ------droup down small size -------------- */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-black mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="lg-header  menu mt-5 dropdown-content shadow bg-white rounded-box px-20  lg:hidden ">

                            <Link to='/' className='btn '>problem-1</Link>
                            <Link to='/problem-2' className='btn ml-6'>problem-2</Link>


                            {
                                user?.uid ? <>

                                    <Link to='/' onClick={logoutBtn} id='logout' className='btn mx-4'>Log out</Link>
                                </>

                                    : <>
                                        <Link to='/registrar' className='btn mx-6'>Registrar</Link>
                                        <Link to='/login' className='btn'>Login</Link>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
                {/* ---------------navbar-Center ----------- */}
                <div className="navbar-center">
                    <div className='flex justify-start  lg:hidden'>
                        <Link to='/' className=" normal-case text-xl w-[80%]">
                            <img className='w-[100%]' src="https://mediusware.com/assets/logo.17d47cfe.svg" alt="" />
                        </Link>

                    </div>
                </div>
                {/* -----------navbar-end  btn section--------- */}

                {/* ==================navbar only large size============= */}
                <div className="navbar-end">

                    <div className="hidden lg:block mr-5">

                        <ul className="lg-header menu menu-horizontal p-0 pr-5">

                            <Link to='/' className='btn '>problem-1</Link>
                            <Link to='/problem-2' className='btn ml-6'>problem-2</Link>


                            {
                                user?.uid ? <>


                                    <Link to='/' onClick={logoutBtn} id='logout' className='btn mx-4'>Log out</Link>
                                </>

                                    : <>
                                        <Link to='/registrar' className='btn mx-6'>Registrar</Link>
                                        <Link to='/login' className='btn'>Login</Link>
                                    </>
                            }



                        </ul>
                    </div>


                    {/* ----------you profile start----------- */}


                    <div id='avatar' className="avatar placeholder mr-2 ">
                        <div className="w-7 rounded-full ring ring-info
                         ring-offset-base-100 ring-offset-2">
                            {
                                user?.uid ?
                                    <img className='w-6 bg-slate-300' src={user?.photoURL} />
                                    :
                                    <img className='w-6 bg-slate-300' src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg" />
                            }
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Header;