import PropTypes from 'prop-types';

const Bookmark1 = ({bookmark}) => {
    const{title}=bookmark;
    return (
        <div className='bg-slate-200 p-3 m-4 rounded-xl'>
            <h3 className='text-xl'>{title}</h3>
        </div>
    );
};
Bookmark1.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark1;