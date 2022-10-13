import React from "react";
import './Loading.css'
import { Spinner } from "reactstrap"

function Loading(){
    return(
        <div className="loading">
            <Spinner color="warning">
                Loading...
            </Spinner>
        </div>
    )
}

export default Loading;