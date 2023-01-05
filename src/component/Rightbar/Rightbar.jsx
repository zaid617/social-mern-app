import { MoreHoriz, Search, VideoCall } from '@mui/icons-material'
import React from 'react'
import "./Rightbar.css"
export default function Rightbar() {


  return (
    <div className='rightBar'>
      <div className="rightBarbox">
      <hr />
        <h2 className='mb-5 col'>Sponsored</h2>
        <hr />
        <div className="rightSubBox">
          <div className="ad">
            <img src="../../../assets/ad.jpg" alt="" className='adImg'/>
            <div className="adText">
              <h5>Start learning today</h5>
              <p>Couresra.org</p>
            </div>
          </div>
        </div>
        <hr />


        <div className='contact'><h2 className='mb-3 col'>Contacts</h2> <div className="contactIcon"><Search className='conIcon'/><VideoCall className='conIcon'/><MoreHoriz className='conIcon'/></div></div>
        <div className="rightSubBox">
          <hr />
        <div className="dp">
            <img src="../../../assets/dp2.png" alt="" className='dpImg'/>
            <div className="adText">
              <p>Osama Khan</p>
            </div>
            <span className='online'></span>
          </div>
          <div className="dp">
            <img src="../../../assets/dp3.jpg" alt="" className='dpImg'/>
            <div className="adText">
              <p>Hammad Khan</p>
            </div>
            <span className='online'></span>
          </div>
          <div className="dp">
            <img src="../../../assets/dp3.jpeg" alt="" className='dpImg'/>
            <div className="adText">
              <p>Muhammad Haroon</p>
            </div>
            <span className='online'></span>
          </div>
          <div className="dp">
            <img src="../../../assets/dp2.png" alt="" className='dpImg'/>
            <div className="adText">
              <p>Usman Khan</p>
            </div>
            <span className='online'></span>
          </div>
          <hr />
          
        </div>
        <div className='contact'><h2 className='mb-3 col'>Groups Conversation</h2> <div className="contactIcon"></div></div>
        <div className="rightSubBox">
          <hr />
        <div className="dp">
            <img src="../../../assets/smit.png" alt="" className='dpImg'/>
            <div className="adText">
              <p>SMIT</p>
            </div>
          </div>
          <div className="dp">
            <img src="../../../assets/web.png" alt="" className='dpImg'/>
            <div className="adText">
              <p>Web and App</p>
            </div>
          </div>
        </div>
        
      </div>
      <hr />

    </div>
  )
}
