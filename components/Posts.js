import React from 'react';
import Post from "./Post";


export default function posts() {
    const posts = [
        {
            id: "1",
            username: "MohsenMotamedipour",
            userImg:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
            img : "https://images.unsplash.com/photo-1668584044380-520997086ee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
            caption: "Nice picture",       
        },
        {
            id: "2",
            username: "MohsenMotamedipour",
            userImg:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
            img : "https://plus.unsplash.com/premium_photo-1663050844860-548dbfcc79a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            caption: "Morning sport",       
        }
    ]
  return <div>
        {posts.map(post =>(
           <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImage={post.userImg}
                img={post.img}
                caption={post.caption}
           /> 
        ))}
    </div>;
  
}
