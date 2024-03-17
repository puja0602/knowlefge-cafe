import PropTypes from "prop-types";
import Bookmark1 from "../Bookmark/Bookmark1";
const Bookmark = ({bookmarks,readingTime}) => {
    
    return (
        <div className="w-1/3 bg-gray-400 mt-6 ml-4 p-4">
            <h1 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h1>
            <h1 className="text-3xl text-center">Reading Time: {readingTime} min</h1>
            {
                bookmarks.map((bookmark,idx)=> <Bookmark1 key={idx} bookmark={bookmark}></Bookmark1>

                )
            }
        </div>
    );
};
Bookmark.propTypes={
    bookmarks: PropTypes.array,
    
}
export default Bookmark;