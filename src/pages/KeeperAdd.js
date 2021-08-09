import style from './KeeperAdd.module.css';
import {HOST} from '../helper';

export default function KeeperAdd(){
    function onSubmit(e){
        e.preventDefault();
        console.log("SUBMITTED");
        var name = document.getElementById("name").value;
        var poster = document.getElementById("poster").value;
        // var genre = document.getElementById("genre").value;
        var year = document.getElementById("year").value;
        var rate = document.getElementById("rate").value;
        // var yourRate = document.getElementById("yourRate").value;
        
        if(name === "" || poster === "" || year === "" || rate === "" ){
            alert("Please fill out the required field");
        } else {
            // fetch(HOST + 'addKeeper').then(res => console.log);
            document.getElementById("addForm").submit();
        }
    }

    return (
        <div className={`${style.formContainer} height100`}>
            <h2 className={style.header}>New Keeper</h2>       
            <form className={`${style.formContent} height100`} id="addForm" action={HOST+'addKeeper'} method='POST'  onSubmit={onSubmit}>  
                <div className='row height100'>
                    <div className="col-12 col-xl-4">
                        <div className={`${style.basicInfoContainer} height100`}>
                            <div className={style.basicInfo}>
                                <div>
                                    <input className={style.inputField} type='text' id="name" name='name' placeholder="Name/Title" autoFocus autoComplete="off"/>
                                </div>
                                <div>
                                    <input className={style.inputField} type='url' id="poster" name='poster' placeholder="Poster" autoComplete="off"/>
                                </div>
                                <div>
                                    <input className={style.inputField} type='text' id="genre" name='genre' placeholder="Genre" autoComplete="off"/>
                                </div>
                                <div>
                                    <input className={style.inputField} type='text' id="year" name='year' placeholder="Year of release" autoComplete="off"/>
                                </div>
                                <div>
                                    <input className={style.inputField} type="number" id="rate" name='rate' step='0.1' min='0' max='10' placeholder="IMDB Rate" autoComplete="off"/>
                                </div>
                                <div>
                                    <select className={style.inputField} id="yourRate" name='yourRate' defaultValue="">
                                        <option value="" disabled hidden>YOUR RATE</option>
                                        <option value='0'>TERRIBLE</option>
                                        <option value='1'>BAD</option>
                                        <option value='2'>OK</option>
                                        <option value='3'>GOOD</option>
                                        <option value='4'>GREAT</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <textarea className={`form-control ${style.review}`} id="review" name='review' placeholder="Your review on this..."></textarea>
                    </div>
                    <div className="col-12 col-xl-2">
                        <button className='btn btn-primary'>Add</button>
                    </div>           
                </div>         
            </form>            
        </div>
    );
}