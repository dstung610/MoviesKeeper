import style from './KeeperItems.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MoviesItems(props){
    var yourRate, yourRateText;
   
    switch (props.movie.yourRate){
        case 0:
            yourRate = "red";
            yourRateText = 'TERRIBLE';
            break;
        case 1:
            yourRate = "orange";
            yourRateText = 'BAD';
            break;    
        case 2:
            yourRate = "yellow";
            yourRateText = 'BAD';
            break;
        case 3:
            yourRate = "lime";
            yourRateText = "GOOD";
            break;
        case 4:
            yourRate = "green";
            yourRateText = "GREAT";
            break;
        default:
            yourRate =  "white";
            yourRateText = '';
            break;
    }
        
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className={style.cardBonus}  onClick={props.overlayHandler}>
                {props.movie.watched? <div className={`${style.watched}  ${style.tag}`}>Watched</div> :""}
                {props.movie.favorite ? <div className={`${style.favorite}  ${style.tag}`}>Favorite</div> : ""}
                <div className='row g-0 height100'>
                    <div className={`col-6 ${style.imgContainer}`}>
                        <img src={props.movie.poster} className={"" + style.fitImg} alt="logo"/>
                    </div>
                    <div className={`col-6 ${style.infoContainer}`}>
                        <div className={style.infoContent}>
                            <h5 className={style.movieName}>{props.movie.name}</h5>                        
                            <div className={style.rating}>Rating: {props.movie.rate}/10</div>
                            <div className={`${style.yourRate}`} style={ {backgroundColor: yourRate }}>{yourRateText}</div>                            
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

