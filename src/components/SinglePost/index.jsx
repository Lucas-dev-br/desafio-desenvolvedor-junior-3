import React from 'react'
import './singlePost.css'
import postImg from '../../assets/post1.jpg'


export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={postImg} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Autor: <b>Lucas Henrique</b></span>
                <span className='singlePostDate'>1 hora atras</span>
            </div>    
                <p className='singlePostDesc'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, aspernatur officia provident facere laboriosam deleniti vel repellat? Iusto aperiam dolore fuga aliquid quaerat quae earum? Error explicabo hic repudiandae voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, aspernatur officia provident facere laboriosam deleniti vel repellat? Iusto aperiam dolore fuga aliquid quaerat quae earum? Error explicabo hic repudiandae voluptatem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, aspernatur officia provident facere laboriosam deleniti vel repellat? Iusto aperiam dolore fuga aliquid quaerat quae earum? Error explicabo hic repudiandae voluptatem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, aspernatur officia provident facere laboriosam deleniti vel repellat? Iusto aperiam dolore fuga aliquid quaerat quae earum? Error explicabo hic repudiandae voluptatem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, aspernatur officia provident facere laboriosam deleniti vel repellat? Iusto aperiam dolore fuga aliquid quaerat quae earum? Error explicabo hic repudiandae voluptatem.
                </p>
        </div>
    </div>
  )
}
