import { Close, Done, Edit, InsertEmoticon, MoreHoriz, PhotoLibrary, VideoCall } from "@mui/icons-material"
import moment from 'moment'
import axios from "axios"
import { Comment, Delete, Favorite, Share, ThumbUp } from '@mui/icons-material'
import "../post/Post.css"
import "./Feed.css"
import { useState, useEffect ,useContext } from "react"
import { GlobalContext } from "../../context/Context"

export default function Feed() {

    
    // usestates


    let {state , dispatch} = useContext(GlobalContext)
    let [newPost, setNewPost] = useState(false);
    let [posts, setPosts] = useState([]);
    let [editing, setEditing] = useState({
      editingId: null,
      editingText: ""
    })


    useEffect(() => {

        console.log(state.user._id);

        const getAllPosts = async () => {
            try {
                const response = await axios.get(`${state.baseUrl}/tweets/${state.user._id}`)
                console.log("response: ", response.data);
                setPosts(response.data.data)
    
            } catch (error) {
                console.log("error in getting all tweets", error);
            }
        }

        getAllPosts()

    }, [newPost])


    // posting function

    const submitHandler = (e) => {

        e.preventDefault();

        
        let fileInput = document.getElementById("image").files[0];
        let textInput = document.getElementById("text");

        if(fileInput){
    
            let formData = new FormData();
    
            formData.append("myFile", fileInput);
            formData.append("text", textInput.value);
            formData.append("ownerName", state.user.firstName);
            formData.append("owner", state.user._id);


        axios({
            method: "post",
            url: `${state.baseUrl}/tweet`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then((res) => {
              setNewPost(!newPost)
              console.log(res);
               document.getElementById("image").value = "";
               document.getElementById("text").value = "";
            })
            .catch((err) => {
              console.log(err.response.data.message);
            });

        }

        else{

            let formData = new FormData();
            formData.append("text", textInput.value);
            formData.append("ownerName", state.user.firstName);
            formData.append("owner", state.user._id);
            
    
            axios({

                method: "post",
                url: `${state.baseUrl}/tweetText`,
                data: formData,
                headers: { "Content-Type": "application/json" },
                withCredentials:true,

              })
                .then((res) => {

                  setNewPost(!newPost);
                  console.log(res);
                  document.getElementById("image").value = "";
                  document.getElementById("text").value = "";

                })
                .catch((err) => {
                  console.log(err.response.data.message);
                });

        }

      }


    // delete post 
  
    const deleteData = async (id) => {
        try {
            const response = await axios.delete(`${state.baseUrl}/tweet/${id}`)
            console.log("response: ", response.data);
            setNewPost(!newPost)

        } catch (error) {
            console.log("error in getting all tweets", error);
        }
  
    }
  
    // update posts
  
    const updateData = async (e) => {
      e.preventDefault();
      axios.put(`${state.baseUrl}/tweet/${editing.editingId}`, {
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
                        <input type="text" placeholder="What's in your mind?" className="cursor" id="text" />
                    </div>
                    <hr />
                    <div className="btns">
                        <button className="btnUpload"><span><VideoCall style={{ fontSize: 30 }} className="color1" /></span><span>Live Video</span></button>
                        <label className="btnUpload">
                            <PhotoLibrary className="color2" />Photos<input id="image"  type="file" style={{ display: "none" }} name="image" />
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
                                        <div className='bold'>{eachpost?.ownerName}</div>
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
                                <div className="title"><span><ThumbUp className='color6' />0 Likes</span>  <span>0 Comments</span></div>
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
