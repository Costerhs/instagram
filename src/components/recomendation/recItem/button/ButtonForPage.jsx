const ButtonForPage = ({ isLoad, is_followed,handleFollow }) => {
    return (
        <button onClick={handleFollow} className="rec__btn">
            {isLoad ? <img src={load} alt="Loading" className='rec__load' />
                : (
                    is_followed ? <p className='rec__unfollow'>unfollow</p> : <p className='rec__follow'>follow</p>
                )}
        </button>
    )
}

export default ButtonForPage