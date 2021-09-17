import React, {Component, memo, useEffect, useState} from 'react';
import {BeakerIcon, MenuIcon, MenuAlt1Icon} from "@heroicons/react/outline";
import * as Styles from "@/Components/nextpage/tw-nextpage";
import App from "@/Components/TaskBarComponent/app/App";
import ResponsiveNavLink from "@/Components/Basic/ResponsiveNavLink";
import {isMobile} from "react-device-detect";

const MobileMenuBar = (active) =>{
    return <div className={(active ? Styles.mobile_bar_open : Styles.mobile_bar_closed)}>
        <div className="pt-2 pb-3 space-y-1 border-t border-gray-200">
            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                Dashboard
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route('nextpage')} active={route().current('nextpage')}>
                Next
            </ResponsiveNavLink>
        </div>

        <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="px-4">
                <div className="font-medium text-base text-gray-800">name</div>
                <div className="font-medium text-sm text-gray-500">email</div>
            </div>

            <div className="mt-3 space-y-1">
                <ResponsiveNavLink method="post" href={route('logout')} as="button">
                    Log Out
                </ResponsiveNavLink>
            </div>
        </div>
    </div>
}
export default (props) => {
    const [active, setActive] = useState(false);

    return (
        <div className="flex min-h-screen">

            <div className={active ? Styles.sidebar_open : Styles.sidebar_Semi_closed}>

            </div>
            <div className="flex flex-col flex-auto flex-grow mx-auto bg-gray-100">
                <div className="flex flex-wrap border-b shadow bg-white">
                    <div className={'flex justify-between min-w-full h-auto items-center'}>
                        <div className="p-4">
                            {active
                                ? <MenuAlt1Icon onClick={() => setActive(!active)}
                                                className="h-7 w-7 hover:text-purple-700 cursor-pointer text-gray-500"/>
                                : <MenuIcon onClick={() => setActive(!active)}
                                            className="h-7 w-7 hover:text-purple-700 cursor-pointer text-gray-500"/>}
                        </div>
                        <div className="flex flex-row p-4">
                            <h1 className={'align-middle justify-center'} style={{height:'fit-content'}}>My Name</h1>
                            <img className="h-12 rounded-full" src="https://via.placeholder.com/150"/>
                        </div>
                    </div>
                    {MobileMenuBar(active)}
                </div>

                <div className={`flex-auto flex-1 space-y-4 p-4`}>
                    <h1 className="">Container</h1>
                    <div className="h-4/5 bg-white shadow rounded-l">
                        <App />
                    </div>
                </div>
                <div className="h-14 border-t-2 shadow bg-white">
                    <span className="h-full inline-block align-text-bottom">Copy Right</span>
                </div>
            </div>
        </div>
    )
}


