const getAlbums = state => {
    // could have used new ES7 optional chaining to make nicer
    const songs = state && state.songs && state.songs.items ? state.songs.items : [];
    const groupedByAlbums = groupBy(songs).sort(compare);

    return { 
        albums: groupedByAlbums || [],
        hasAlbums: groupedByAlbums && groupedByAlbums.length > 0
    }
};

// sort by band name
export const compare = (a, b) => {
  const bandA = a.band.toUpperCase();
  const bandB = b.band.toUpperCase();

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

// would unot test this
export const groupBy = songs => {
  let helper = {};

  // Using reduce to avoid mutating items
  return songs.reduce((reducer, current) => {
    var key = `${current.band} - ${current.album}`;

    //Group by album with songs
    if(!helper[key]) {
      helper[key] = Object.assign({}, current);
      (helper[key].songs = []).push(current.song);

      // remove individual song from top level property
      delete helper[key].song;
      reducer.push(helper[key]);
    } else {
      helper[key].songs.push(current.song);
    }

    return reducer;
}, []);
}

export default getAlbums;
