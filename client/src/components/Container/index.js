import React from "react";


const Container = ({fluid, children, id}) => {
    return (
        <div className={`container${fluid ? '-fluid' : ''}`} id={id}>
            {children}
        </div>
    )

}

export default Container;