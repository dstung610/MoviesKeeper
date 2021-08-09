import style from './KeeperDetails.module.css'

export default function KeeperDetails(props){
    return (
        <div className={`${style.overlay}`}>            
            <div className='row' style={{height: '100%'}}>
                <div className={`col-12 col-md-6`} style={{height:'100%'}}>
                    <div className={style.posterContainer}>
                        <img id={style.poster} src={props.data.poster} alt='poster'/>
                    </div>                    
                </div>
                <div className={`col-12 col-md-6 ${style.infoArea}`}>
                    <div className={style.infoContainer}>
                        <button onClick={props.overlayHandler}>Close</button>
                        <h3>{props.data.name}</h3>
                        <p>Rating: {props.data.rate}/10</p>
                        <p>Your Rate: {props.data.yourRate}</p>
                        <p>Genre: {props.data.genre} 
                            {/* {props.data.genre.map((item) => {
                                return item + ',';
                            })} */}
                        </p>
                        <p>Watched: {props.data.watched? "Yes": "No"}</p>
                        <p>Favorite: {props.data.favorite? "Yes": "No"}</p>
                        <p>Review:{props.data.review}</p>                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}