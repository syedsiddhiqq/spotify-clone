export const initialState = {
  user: null,
  //   token:
  // "BQDTp1DeCgP_9oII7UkgE3834ZStIdtE_uY39V4ojm7otgy9NNdqNYfCB1pQnOL9h9LGJISGmehAVZpyoHkzT80sGuBUO3tT0AsHimxVAB3ktSUCD4tI9aGyisBEM50gtN_fTrolT0AvOV-FBfv_DIlzyVRov5Kw-k-OSFv9ikRMwhFn",
  playLists: [],
  playing: false,
  item: null,
  discoverWeekly: null,
};

const reducer = (state, action) => {
  console.log(action);

  // Action contains type and value..
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playLists: action.playLists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
