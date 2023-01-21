import Card from "../Cards";
import Data from "../../Data/Data";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";


import "./Post.css";

const Post = () => {
  const postInfo = Data.map(ele => 
    <Card
      key={ele.id}
      userimg={ele.userImage}
      name={ele.name}
      date={ele.date}
      desc={
        <>
          {ele.desc}
          <a href="#">google</a>
        </>
      }
      postimg={ele.postImage}
      iconlike={<BiLike />}
      iconcomment={<BiCommentDetail />}
      iconshare={<RiShareForwardLine />}
    />
  );
  return <div className="container">{postInfo}</div>;
};

export default Post;


