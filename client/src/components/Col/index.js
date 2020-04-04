import React from "react";

const Row = ({ size, children}) => {
    return (
        <div class={`col-${size}`}>
            {children}
        </div>
    )
}

export default Row;