import React, {Component} from 'react';
import Authenticated from "@/Layouts/Authenticated";
import {render} from "react-dom";

export default (props) => {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Next Page</h2>}
        >
            <div>
                hello here
            </div>
        </Authenticated>
    )
}

