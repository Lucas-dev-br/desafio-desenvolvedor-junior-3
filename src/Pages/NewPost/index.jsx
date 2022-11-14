import React from 'react'
import "./newPost.css"
import postImg from '../../assets/post1.jpg'

export default function NewPost() {
  return (
    <div className='write'>
        <img src={postImg} className="writeImg" alt="" />
        <form className='writeForm'>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id='fileInput' style={{display: "none"}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder='Digite seu texto' type="text" className='writeInput writeText'>

            </textarea>
          </div>
          <button className="writeSubmit">Publicar</button>
        </form>
    </div>
  )
}
