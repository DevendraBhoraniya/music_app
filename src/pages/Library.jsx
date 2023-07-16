import React, { useEffect, useState } from 'react'
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import apiClient from './Spotify'
import { useNavigate } from "react-router-dom";

const Library = () => {

  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    apiClient.get('me/playlists').then(function (response) {
      setPlaylist(response.data.items);
      console.log(response.data.items);
    });
  },
    []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <>
      <div className='screen-container'>

        <h1 className='font-bold text-6xl my-5 mx-14 text-white'>Library</h1>
        <div className='flex flex-wrap gap-4 mx-14 my-10' >
          {playlist?.map((playlist) => (
            <div className="w-[15%] h-[35%] rundex-lg p-3 bg-[#1f3c6e] rounded-lg cursor-pointer relative " key={playlist.id}
          onClick={() => playPlaylist(playlist.id)}>
              <img src={playlist.images[0].url} alt="Playlist Image" className="w-[100%] aspect-[1] rounded-xl" />
              <div className="">
                <h3 className="text-slate-300 font-medium overflow-hidden text-ellipsis line-clamp-2 box-content ">{playlist.name}</h3>
                <p className="font-normal text-xs text-gray-500">{playlist.tracks.total} Songs</p>
                <IconContext.Provider value={{ size: "50px", color: "white" }}>
                  <AiFillPlayCircle className='absolute right-[17px] bottom-[103px] opacity-0 hover:opacity-100 w-[84%] h-[34%] flex items-end justify-end p-[8%]  transition ease-in-out' />
                </IconContext.Provider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Library
