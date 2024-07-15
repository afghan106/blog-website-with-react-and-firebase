import React, { useState } from 'react';
import './PostPage.css';
import { addDoc,collection } from 'firebase/firestore';
import { db,auth } from '../config/firebase_config';
import {  useNavigate } from 'react-router-dom';



const PostPage = () => {
    let navigate=useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
 const postcollectionRef=collection(db,'post')
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
setContent(e.target.value);
  };


  const handleSubmit =async (e) => {
    e.preventDefault();
    await addDoc(postcollectionRef,{
        title
        ,postText:content 
        ,author:{
            name:auth.currentUser.displayName ,
            id: auth.currentUser.uid,
    
        }})
        navigate('/');
  };


  return (
    <div className="post-page">
      <h1 className="post-page__title">New Post</h1>
      <form className="post-page__form" onSubmit={handleSubmit}>
        <div className="post-page__form-group">
          <label className="post-page__label" htmlFor="title">
            Title:
          </label>
          <input
            className="post-page__input"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="post-page__form-group">
          <label className="post-page__label" htmlFor="content">
            Content:
          </label>
          <textarea
            className="post-page__textarea"
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <button className="post-page__submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostPage;