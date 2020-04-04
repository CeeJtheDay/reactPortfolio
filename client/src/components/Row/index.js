import React from "react";

const Row = ({justify, children}) => {
    return (
        <div class={"row" (justify ? "justify-content-" + justify : "")}>
            {children}
        </div>
    )
}

export default Row;