import './actors.css';

const Actors = (props) => {
    return (
        <div className='actors-person-piece'>
            <h1>Actors</h1>
            <div className='actors-piece'>
                <div className='person-piece'>
                    <img src="https://media.timeout.com/images/30087/750/422/image.jpg" alt="" />
                    <h3>Cristian Bale</h3>
                </div>
                <div className='person-piece'>
                    <img src="https://www.slashfilm.com/img/gallery/why-ending-ben-afflecks-batman-run-was-a-big-missed-opportunity/intro-1656106886.jpg" alt="" />
                    <h3>Ben Affleck</h3>
                </div>
                <div className='person-piece'>
                    <img src="https://www.looper.com/img/gallery/the-unusual-way-matt-reeves-directed-robert-pattinsons-performance-in-the-batman/intro-1646249273.jpg" alt="" />
                    <h3>Robert Pattinson</h3>
                </div>
                <div className='person-piece'>
                    <img src="https://imgr.cineserie.com/2022/01/batman-forever-photo-1176399.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1" alt="" />
                    <h3>Val Kilmer</h3>
                </div>
                <div className='person-piece'>
                    <img src="https://www.looper.com/img/gallery/the-most-pause-worthy-moments-in-michael-keatons-batman-movies/l-intro-1643649269.jpg" alt="" />
                    <h3>Micheal Keaton</h3>
                </div>
            </div>
        </div>
    )
}

export default Actors;