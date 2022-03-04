const stateDefault = {
  arrListJob: [
    {
      subTypeJobs: [
        {
          deleteAt: false,
          _id: "61951593aef344001cec451e",
          name: "Logo Design",
          status: true,
          typeJob: "61977cebaef344001cecee6c",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619515b8aef344001cec4522",
          name: "Brand Style Guides",
          status: true,
          typeJob: "61977cebaef344001cecee6c",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619515bdaef344001cec4526",
          name: "Game Art",
          status: true,
          typeJob: "618c90ff95d99f001c0c047a",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619515c2aef344001cec452a",
          name: "Graphics for Streamers",
          status: true,
          typeJob: "618c90ff95d99f001c0c047a",
          __v: 0,
        },
      ],
      deleteAt: false,
      _id: "618c90ff95d99f001c0c047a",
      name: "Graphics & Design",
      status: true,
      __v: 22,
    },
  ],
};

export default (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_TYPEJOB": {
      console.log("hello");
      state.arrListJob = action.arrListJob;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
