import React, { FC, ReactElement} from "react";

const Menu: FC= (): ReactElement => {
    const time = new Date()
    return (
        <div className="backdrop-filter backdrop-blur-md bg-opacity-60 bg-gray-50 h-full w-1/4 rounded-l-lg flex flex-col items-center">
            <div className="text-3xl font-serif font-bold mt-4">Vision</div>
        </div>
    )
}

export default Menu;
