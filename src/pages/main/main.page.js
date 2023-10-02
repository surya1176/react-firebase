import {getDocs,collection} from "firebase/firestore"
import { useState,useEffect } from "react"
import { db } from "../../config/firebase.ts"
import {Post} from "./posts.js"
export const Main= () =>{
    const [postslist,setpostslist]= useState(null)
    const postRef= collection(db,"posts");
    const getPosts = async () =>{
        const data = await getDocs(postRef)
        setpostslist(data.docs.map((doc) =>({...doc.data() , id :doc.id })))
    }
    useEffect(()=>{
        getPosts();
    })
    return (
    <div>
    {postslist?.map((post)=>(
      <Post post ={post}/>
    ))}
    </div>
     )
}