import React, { useEffect, useState } from 'react'
import SidebarButton from './item/sidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../pages/Spotify';

const Sidebar = () => {

    const [image, setImage] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
    );

    useEffect(() => {
        apiClient.get("me")
            .then((response) => {
            setImage(response.data.images[0].url);
            });
    },
        []);

    return (
        <>
            {/* Profile */}
            <div className='w-[100px] h-[100%] flex flex-col items-center justify-between ' >
                <img src={image} alt="Avtar" className='h-[50px] w-[50px] mt-[20px] rounded-lg object-cover' />

                {/* Buttons */}
                <div>
                    <SidebarButton
                        title="Feed"
                        to="/Feed"
                        icon={<MdSpaceDashboard />} />
                    <SidebarButton
                        title="Trending"
                        to="/Trending"
                        icon={<FaGripfire />} />
                    <SidebarButton
                        title="Player"
                        to="/Player"
                        icon={<FaPlay />} />
                    <SidebarButton
                        title="Favorites"
                        to="/Favorites"
                        icon={<MdFavorite />} />
                    <SidebarButton
                        title="Library"
                        to="/"
                        icon={<IoLibrary />} />
                </div>
                <SidebarButton
                    title="Sign Out"
                    to="#"
                    icon={<FaSignOutAlt />} />
            </div>
        </>
    )
}

export default Sidebar
