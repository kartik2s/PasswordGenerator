import React from "react";

function Display(props) {
    return (
        <>
        { props.password && (
            <div className="output">
                <p>{props.password}</p>
            </div>
        )}
        </>
    )
}

export default Display;