import React, { useEffect } from 'react';
import fetchSongs from '../state/actions/fetchSongs'
import Album from './Album'
import withCollapse from './withCollapse'
import { useDispatch } from "react-redux";

function AlbumContainer(props) {
    const { hasAlbums, albums, showAll } = props;

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchSongs())
    }, [dispatch]);

    if (!hasAlbums) {
      return <div>Loading</div>;
    }

    const items = albums.map((album, index) => {
      const title = `${album.band},  ${album.album}`;
      const AlbumContainerWithCollapse = withCollapse(title, Album, showAll);
      return <AlbumContainerWithCollapse key={index} {...album} />
    });

    return (
      <div>
        {items}
      </div>
    );

}

export default AlbumContainer;