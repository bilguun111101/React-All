import '../App.css'
import "https://kit.fontawesome.com/a076d05399.js";
import { useButtonContext } from '../context';

const Profile = (props) => {
    const data = props.data;
    const index = props.index;
    let { setIsClicked, isClicked } = useButtonContext();
    let isClickedMap = isClicked.map((el, ind) => ind === index && !el);
    let changeBool = () => {
        setIsClicked(isClickedMap);
    }

    return (
            <div className={isClicked[index] ? 'top-div active-top-div' : "top-div"}>
                <div className='header-pro'>
                    <div className='name-pro'>{data.name}</div>
                    <div className='image-pro'>
                        <img src={data.image} alt="" />
                    </div>
                </div>
                {/* {<View data={data}/>} */}
                <div className={isClicked[index] ? "add-middle active" : "add-middle"}>
                    <div className='add-imformation'>
                        <i className='fas fa-heart'></i>
                        <div>{data.job}</div>
                    </div>
                    <div className='add-imformation'>
                        <i className='fas fa-heart'></i>
                        <div>{data.type}</div>
                    </div>
                    <div className='add-imformation'>
                        <i className='fas fa-heart'></i>
                        <div>{data.age}</div>
                    </div>
                    <div className='add-imformation'>
                        <i className='fas fa-heart'></i>
                        <div>{data.wife}</div>
                    </div>
                    <div className='add-imformation'>
                        <i className='fas fa-heart'></i>
                        <div>{data.gender}</div>
                    </div>
                    <div className='add-imformation'>
                        <i className='fas fa-heart'></i>
                        <div>{data.salary}</div>
                    </div>
                    <div className='add-imformation'>
                        <i className='fas fa-heart'></i>
                        <div>{data.movies}</div>
                    </div>
                    <div className='add-imformation'>
                        <i className='fas fa-heart'></i>
                        <div>{data.Born}</div>
                    </div>
                </div>
            <footer className='footer-view'>
                <button onClick={() => changeBool(index)}>View more</button>
            </footer>
        </div>
    )
}

export default Profile;