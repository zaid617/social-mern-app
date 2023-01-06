
import "./Sidebar.css"





export default function Sidebar(props) {

  
  return (
    <div className="sticky">
      <div className='sideBar'>


        <div className="category">
          <ul>
            <li className="list"><img src="../../../assets/dp.jpg" alt="" className='icon m5' /><span><h2 style={{marginLeft:"5px"}}>{props.username}</h2></span></li>
          </ul>
          <ul className="ul">
            <hr className="bottom" />
            <li title="friends"><img src="../../../assets/friends.png" alt="" className='icon' /><span>Friends</span></li>
            <li title="groups"><img src="../../../assets/groups.png" alt="" className='icon' /><span>Groups</span></li>
            <li title="marketplace"><img src="../../../assets/marketplace.png" alt="" className='icon' /><span>Marketplace</span></li>
            <li title="watch"><img src="../../../assets/watch.png" alt="" className='icon' /><span>Watch</span></li>
            <li title="saved"><img src="../../../assets/saved.png" alt="" className='icon' /><span>Saved</span></li>
            <li title="pages"><img src="../../../assets/pages.png" alt="" className='icon' /><span>Pages</span></li>
            <li title="recents"><img src="../../../assets/recent.png" alt="" className='icon' /><span>Recent</span></li>
            <li title="memories"><img src="../../../assets/memories.png" alt="" className='icon' /><span>Memories</span></li>
            <li title="most recents"><img src="../../../assets/mostRecents.png" alt="" className='icon' /><span>Most Recent</span></li>
          </ul>
          <hr className="bottom" />
          <ul className="ul">
            <li><img src="../../../assets/messenger.png" alt="" className='icon' /><span>Messenger</span></li>
            <li><img src="../../../assets/bloodDonation.png" alt="" className='icon' /><span>Blood Donation</span></li>
            <li><img src="../../../assets/favorites.png" alt="" className='icon' /><span>Favorites</span></li>
            <li><img src="../../../assets/gaming.png" alt="" className='icon' /><span>Gaming</span></li>
          </ul>
        </div>

      </div>

    </div>
  )
}
