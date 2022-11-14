import React from 'react'
import './posts.css'

import postImg from '../../assets/post1.jpg'

export default function Posts() {
  return (
    <div className='post'>
      <div className="postInfo">  
        <div className='postImg'>
            <img src={postImg} alt="" />
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit
        </span>
        <hr />
        <span className="postDate">
          1 hora átras
        </span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum minima accusantium. Quia eos aperiam excepturi delectus iusto culpa deleniti velit, quos nesciunt ex odit perferendis ipsam alias explicabo? Saepe!</p>
    </div>
  )
}
