
const users =[
    {
            id:1,
            name: "will junior  Smith",
            profile_img: "../../assets/1.png",
            email: "johnSmith2020@gmail.com",
            password: "johnsmith",
            username: "smithJ2024",
            city:"Charlotte",
            state: "North Carolina",
            profession: "Developper"
    },   
    {
            id:2,
            name: "Samir Haddadi",
            profile_img: "../../assets/2.png",
            email: "samcoeur2020@gmail.com",
            password: "samir",
            username: "samcoeur",
            city:"Charlotte",
            state: "North Carolina",
            profession: "Driver"  
    },  
    {
            id:3,
            name: "Djamel Haddadi",
            profile_img: "../../assets/3.png",
            email: "Djamel-haddadi1990@gmail.com",
            password: "djamel",
            username: "djimka",
            city:"Algiers",
            state: "Algiers",
            profession: "Delivery driver"  
    }

]

const posts =[
     {
        id:1,
        user_id:1,
        image_url:"static/materials/samir.jpeg",
        desc: "my first post , Hello"
     },
     {
        id:2,
        user_id:1,
        image_url:"static/materials/samir.jpeg",
        desc: "my second post , Hello world"
     },
    {
      id : 3,
      user_id : 1,
      image_url : "static/materials/samir.jpeg",
      desc : "my first post , Hello"
    },
    {
      id : 4,
      user_id : 2,
      image_url : "static/materials/samir.jpeg",
      desc : "feeling great , Hello"
    },
    ,
    {
      id : 5,
      user_id :2,
      image_url : "static/materials/samir.jpeg",
      desc : "what's going on friends"
    },
    {
      id : 6,
      user_id : 3,
      image_url : "static/materials/samir.jpeg",
      desc : "my first post , Hello"
    },
    {
      id : 7,
      user_id : 2,
      image_url : "static/materials/samir.jpeg",
      desc : "feeling great , Hello"
    },
    ,
    {
      id : 8,
      user_id :3,
      image_url : "static/materials/samir.jpeg",
      desc : "what's going on friends"
    }
]

const comments =[ 
    {
          
    }
]



module.exports = { users ,posts };