const categories = [
    {
        id:'yazilim',
        name:"Yazılım",
        tags : ['products','inspirations','shop'],
        count : 12,
        image: require('../assets/images/yazilim.png')
    },
    {
        id:'teknoloji',
        name:"Teknoloji",
        tags : ['products','inspirations','shop'],
        count : 147,
        image: require('../assets/images/yazilim.png')
    },
    {
        id:'bilim',
        name:"Bilim",
        tags : ['products','inspirations'],
        count : 515,
        image: require('../assets/images/yazilim.png')
    },
    {
        id:'matematik',
        name:"Matematik",
        tags : ['products'],
        count : 2681,
        image: require('../assets/images/yazilim.png')
    },
];

const products = [
    {
        id: 1,
        name: "React Native Software !",
        description: 'Açıklama',
        tags: ['Interior','27m','Ideas'],
        gallery: [
            require('../assets/yazilim.png'),
            require('../assets/yazilim.png'),
            require('../assets/yazilim.png'),
            // Extra images 2
            require('../assets/yazilim.png'),
            require('../assets/yazilim.png'),
        ]
    }
];

const explore = [
    //images
    require('../assets/yazilim.png'),
    require('../assets/yazilim.png'),
    require('../assets/yazilim.png'),
    require('../assets/yazilim.png'),
];

const profile = {
    username: "Ömer",
    location: "İstanbul",
    email: "codanux@hotmail.com",
    avatar: require('../assets/yazilim.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
};


export {
    categories,
    products,
    profile,
}