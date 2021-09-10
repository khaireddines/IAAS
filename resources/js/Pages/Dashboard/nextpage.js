import React, {Component} from 'react';
import Authenticated from "@/Layouts/Authenticated";
import {render} from "react-dom";

export default (props) => {
    let myclass ="hidden shadow-2xl w-72 md:block bg-white left-0 z-10";
    return (
        <div className="flex min-h-screen">
            <div className={myclass}>
                <h1></h1>
            </div>
            <div className="flex flex-col flex-auto flex-grow mx-auto bg-gray-100">
                <div className="h-16 border-b shadow bg-white">
                    <h1></h1>
                </div>
                <div className="flex-auto flex-1 space-y-4 p-4">
                    <h1 className="">Container</h1>
                    <div className="h-4/5 bg-white shadow rounded-l">
                        dsfds
                    </div>
                </div>
                <div className="h-10 border-t-2 shadow bg-white">
                    <span className="h-full inline-block align-text-bottom"></span>
                </div>
            </div>
        </div>
    )
}

