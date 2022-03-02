const initialState = {
  arrCard: [
    {
      deleteAt: false,
      _id: "618df65795d99f001c0c1677",
      name: "Create Image",
      rating: 7.7,
      price: 40,
      proServices: true,
      localSellers: false,
      onlineSellers: false,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618c910f95d99f001c0c047c",
        name: "Logo Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/subtype/1640843659004_cool-background.png",
      },
      status: true,
      userCreated: "618c8f4595d99f001c0c045f",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1636693598028_tải xuống (1).jpg",
      usersBooking: null,
    },
    {
      deleteAt: false,
      _id: "618df67a95d99f001c0c1688",
      name: "Create Picture",
      rating: 7.5,
      price: 70,
      proServices: true,
      localSellers: false,
      onlineSellers: true,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618c910f95d99f001c0c047c",
        name: "Logo Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/subtype/1640843659004_cool-background.png",
      },
      status: true,
      userCreated: "618c8f4595d99f001c0c045f",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1644488154431_1636693632048.png",
      usersBooking: null,
    },
    {
      deleteAt: false,
      _id: "618df69d95d99f001c0c1698",
      name: "DO everything",
      rating: 8.8,
      price: 77,
      proServices: false,
      localSellers: true,
      onlineSellers: false,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618c910f95d99f001c0c047c",
        name: "Logo Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/subtype/1640843659004_cool-background.png",
      },
      status: false,
      userCreated: "618c8f4595d99f001c0c045f",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1636693668754_tải xuống.jpg",
      usersBooking: "618cf0f395d99f001c0c0a34",
    },
    {
      deleteAt: false,
      _id: "618e18d895d99f001c0c1801",
      name: "I will Create a website",
      rating: 7.7,
      price: 77,
      proServices: true,
      localSellers: true,
      onlineSellers: false,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618c910f95d99f001c0c047c",
        name: "Logo Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/subtype/1640843659004_cool-background.png",
      },
      status: false,
      userCreated: "618c8f4595d99f001c0c045f",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1636702431613_th.jpg",
      usersBooking: "618cb42595d99f001c0c058b",
    },
    {
      deleteAt: false,
      _id: "618e234295d99f001c0c1822",
      name: "I will DO everything",
      rating: 0,
      price: 10,
      proServices: false,
      localSellers: false,
      onlineSellers: false,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618c910f95d99f001c0c047c",
        name: "Logo Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/subtype/1640843659004_cool-background.png",
      },
      status: true,
      userCreated: "618c8f4595d99f001c0c045f",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1636705095948_OIP (1).jpg",
      usersBooking: null,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_DSCV": {
      state.arrCard = action.arrCard;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
