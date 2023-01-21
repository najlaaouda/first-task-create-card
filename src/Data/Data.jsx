import firstuser from '../assets/imgs/user1.jpg'
import seconduser from '../assets/imgs/user2.jpg'
import thirduser from '../assets/imgs/user3.jpg';
import firstpost from '../assets/imgs/code.jpg'
import secondpost from '../assets/imgs/develop.jpg'
import thirdpost from '../assets/imgs/laptop.jpg';


const dataPost = [
  {
    id: "1",
    userImage: firstuser,
    name: "Ahmed Ali",
    date: "22.Dec.2022 at 23:20",
    desc: "Hero section is an area of website that is typically located at the top of the page and is used to display important content or information and is used to display",
    postImage:firstpost 
   },
{
  id: "2",
  userImage:seconduser,
  name: "Mohammed Ghasan",
  date: "Today at 10:20",
  desc: "It’s time to enrich the functionalities of your website to meet its needs. Holykit is a collection of website blocks or layouts using layouts using ",
  postImage:secondpost 
},
{
  id: "3",
  userImage:thirduser,
  name: "khaled Mustafa",
  date: " 12.Jan at 08:20",
  desc: "As a user, it is important to have a positive experience when using a website or app. This can help to keep you engaged and ensure that you enjoy your experience.",
  postImage:thirdpost,
 }
];


export default dataPost;
