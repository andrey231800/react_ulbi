import React from 'react'
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';
import { useState } from 'react';

export const PostForm = ({create}) => {
    
    const [post, setPost] = useState({body: '', title: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({body: '', title: ''})
    }  

    return (
        <form action="">
            <MyInput 
                type="text"
                onChange={e => setPost({...post, title: e.target.value})}
                placeholder='Название поста'
                value={post.title}
            />
            <MyInput 
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})} 
            type="text" 
            placeholder='Описание поста'
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}
