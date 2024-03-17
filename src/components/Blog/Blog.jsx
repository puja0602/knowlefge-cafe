import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
    const{id,title,cover_img,author,author_img,posted_date,reading_time,hashtags}=blog;
    // console.log(blog);
    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full mb-8' src={cover_img} alt={`Cover picture of the blog ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center mb-4'>
                    <img className='w-20 h-20 rounded-full' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-2'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=>(
                        <span className='mr-2' key={idx}><a href="">#{hash}</a></span>
                    ))
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-lg text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;