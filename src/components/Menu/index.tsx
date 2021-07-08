import React, { FC, ReactElement} from "react";

const Menu: FC= (): ReactElement => {
    const time = new Date()
    return (
        <div className="backdrop-filter backdrop-blur-md bg-opacity-60 bg-gray-50 h-full w-1/2">
            <div className="">todo</div>
        </div>
    )
}

export default Menu;