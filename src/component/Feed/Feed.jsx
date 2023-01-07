import { Close, Done, Edit, InsertEmoticon, MoreHoriz, PhotoLibrary, VideoCall } from "@mui/icons-material"
import moment from 'moment'

import axios from "axios"
import { Comment, Delete, Favorite, Share, ThumbUp } from '@mui/icons-material'
import "../post/Post.css"
import "./Feed.css"
import { useState, useEffect } from "react"

export default function Feed(props) {

    
    // usestates


    let [newPost, setNewPost] = useState(false);
    let [value, setValue] = useState("");
    let [posts, setPosts] = useState([]);
    let [file, setFile] = useState(null);
    let [editing, setEditing] = useState({
      editingId: null,
      editingText: ""
    })


    useEffect(() => {

        const getAllPosts = async () => {
            try {
                const response = await axios.get(`${props.baseUrl}/tweets`)
                console.log("response: ", response.data);
                setPosts(response.data.data)
    
            } catch (error) {
                console.log("error in getting all tweets", error);
            }
        }

        getAllPosts()

    }, [newPost, props.baseUrl])


    // posting function

    const submitHandler = () => {
    
        console.log("start");
        const cloudinaryData = new FormData();
        cloudinaryData.append("file", file);
        cloudinaryData.append("upload_preset", "postPic");
        cloudinaryData.append("cloud_name", "dahfjrq6m");
        console.log(cloudinaryData);
        axios.post(`https://api.cloudinary.com/v1_1/dahfjrq6m/image/upload`, cloudinaryData,
          {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(async res => {
            console.log("from then", res.data);

            axios.post(`${props.baseUrl}/tweet`, {
                text: value,
                url: file,
            })
                .then(response => {
                    console.log("response: ", response.data);
                    setNewPost(!newPost)
                })
                .catch(err => {
                    console.log("error: ", err);
                })
          })
          .catch(async err => {
            console.log("from catch", err);
          })
      }

    // delete post 
  
    const deleteData = async (id) => {
        try {
            const response = await axios.delete(`${props.baseUrl}/tweet/${id}`)
            console.log("response: ", response.data);
            setNewPost(!newPost)

        } catch (error) {
            console.log("error in getting all tweets", error);
        }
  
    }
  
    // update posts
  
    const updateData = async (e) => {
      e.preventDefault();
      axios.put(`${props.baseUrl}/tweet/${editing.editingId}`, {
        text: editing.editingText,
    })
        .then(response => {
            console.log("post updated sucessfully ");
            setNewPost(!newPost)
        })
        .catch(err => {
            console.log("error: ", err);
        })
  
    }
    
  
    // edit post text
  
    const edit = (postId, postText) => {
      setEditing({
        ...editing,
        editingId: postId,
        editingText: postText
      })
    } 
  

    const close = () => {
        setEditing({
            editingId: null,
            editingText: ""
        })
    }

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction(e) {
        e.target.nextSibling.classList.toggle('show')
    }

    return (
        <div className='feed'>
            <div className="main"  >
                <div className="upload">
                    <div className="inputBox">
                        <img src="../../../assets/dp.jpg" alt="" />
                        <input type="text" placeholder="What's in your mind?" className="cursor" value={value} onChange={(e) => { setValue(e.target.value) }} />
                    </div>
                    <hr />
                    <div className="btns">
                        <button className="btnUpload"><span><VideoCall style={{ fontSize: 30 }} className="color1" /></span><span>Live Video</span></button>
                        <label className="btnUpload">
                            <PhotoLibrary className="color2" />Photos<input onChange={(e) => { setFile(e.currentTarget.files[0]) }} type="file" style={{ display: "none" }} name="image" />
                        </label>

                        {/* <button className="btnUpload"><span><InsertEmoticon style={{ fontSize: 30 }} className="color3" /></span><span>Feeling</span></button> */}


                        <button className="color4"  onClick={submitHandler} >Post</button>
                    </div>
                </div>
            </div>
            <hr />

            {
                posts.map((eachpost, i) => (
                    <div className="width" key={i}>
                        <div className="post">

                            <div className="dropdown menu" onClick={(e) => { myFunction(e) }}>
                                <MoreHoriz className="dropbtn" style={{ fontSize: 25 }} />
                                <div id="myDropdown" className="dropdown-content">
                                    <div className="flex">
                                        <button className="del color9" onClick={() => { deleteData(eachpost._id) }}>Delete <Delete /></button>
                                        <hr />


                                        <button className="del color10" onClick={
                                            () => {
                                                edit(eachpost._id, eachpost.text)
                                            }}
                                        >Edit <Edit /></button>


                                    </div>
                                </div>
                            </div>


                            <div className="titleBox1">
                                <div className="title2"><img src="../../../assets/dp.jpg" className='icon2' alt="" />
                                    <span>
                                        <div className='bold'>{eachpost?.owner}</div>
                                        <div>{moment(eachpost?.createdOn).fromNow()}</div>
                                    </span>
                                </div>
                            </div>

                            {(eachpost._id === editing.editingId) ? <div className="divForm" >
                                <div className="pos">
                                    <label htmlFor="" className="label">
                                        <input type="text" className="editText" value={editing.editingText} onChange={(e) => {
                                            setEditing({
                                                ...editing,
                                                editingText: e.target.value
                                            })
                                        }} />
                                        <Done onClick={updateData} className="close" />
                                    </label>
                                    <span><Close className="done" onClick={close} /></span>
                                </div>
                            </div> :
                                <p className='para'>{eachpost?.text}</p>}

                            {(eachpost?.url) ? <div className="container">
                                <img src={eachpost.url} alt="" className="image" />
                            </div> : null}

                            <div className="titleBox">
                                <div className="title"><span><ThumbUp className='color6' /><Favorite className='color7' />0 Likes</span>  <span>0 Comments</span></div>
                                {/* <hr /> */}
                                <div className="date">
                                    <span className='span'><ThumbUp className='com'/>Like</span>
                                    <span className='span'><Comment className='com' />Comments</span>
                                    <span className='span'><Share className='com' />Share</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div >
    )
}
