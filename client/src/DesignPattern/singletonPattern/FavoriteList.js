import React, { useEffect, useState } from 'react';
import Item from '../../components/Item';
import LocalStorageManager from './LocalStorageManager';

const FavoriteList = ({ favorites }) => {
  const [favoriteRooms, setFavoriteRooms] = useState([]);

  useEffect(() => {
    // Sử dụng danh sách phòng yêu thích được truyền từ props
    if (favorites.length > 0) {
      const localStorageManager = LocalStorageManager.getInstance();
      const rooms = favorites.map((postKey) => {
        const [title, id] = postKey.split('_');
        const roomInfo = localStorageManager.getRoomInfo(postKey);

        return {
          id,
          title,
          ...roomInfo,
        };
      });

      setFavoriteRooms(rooms);
    }
  }, [favorites]);

  return (
    <div className='grid grid-cols-1 md:grid md:grid-cols-3 md:px-[5rem]'>
      {favoriteRooms.map((room) => (
        <Item key={room.id} {...room} />
      ))}
    </div>
  );
};

export default FavoriteList;
