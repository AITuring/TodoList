import React, { FC, ReactElement } from "react";
import homeImg from 'assets/home.png';
import timeImg from 'assets/time.png';
import noteImg from 'assets/note.png';
import tagImg from 'assets/tag.png';
import trashImg from 'assets/trash.png';

const Menu: FC= (): ReactElement => {
    return (
        <div className="bg-gray-100 dark:bg-gray-400 shadow-inner h-full w-1/9 px-6">
            <div className="my-6 p-4 rounded-lg cursor-pointer hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-500">
                <img src={homeImg} className="w-6"/>
            </div>
            <div className="my-6 p-4 rounded-lg cursor-pointer hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-500">
                <img src={timeImg} className="w-6"/>
            </div>
            <div className="my-6 p-4 rounded-lg cursor-pointer hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-500">
                <img src={noteImg} className="w-6"/>
            </div>
            <div className="my-6 p-4 rounded-lg cursor-pointer hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-500">
                <img src={tagImg} className="w-6"/>
            </div>
            <div className="my-6 p-4 rounded-lg cursor-pointer hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-500">
                <img src={trashImg} className="w-6"/>
            </div>
        </div>
    )
}

export default Menu;
