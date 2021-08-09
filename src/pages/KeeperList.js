import {useState, useEffect} from 'react';

import KeeperItems from '../components/KeeperItems';
import KeeperDetails from '../components/KeeperDetails';
// import style from './KeeperList.module.css';
import {HOST} from "../helper"


export default function KeeperList(props){
    const [overlay, setOverlay] = useState(false);    
    const [overlayData, setOverlayData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [keepers, setKeepers] = useState([]);

    function setOverlayOn(movie){
        setOverlayData(movie);    
        setOverlay(true);
        console.log(movie);
    }

    function setOverlayOff(){
        setOverlay(false);
        setOverlayData({});
    }
    useEffect(()=> {
        fetch(HOST+"queryKeepers").then((res) => res.json()).then((keepers) =>{
            setKeepers(keepers);
            setIsLoading(false);
        })
    }, [])
    
    return (        
        <div className='row'>
            {isLoading? "LOADING DATA" : ""}
            {!isLoading? keepers.map((item) => {return <KeeperItems key={item._id} movie={item} overlayHandler={()=>setOverlayOn(item)}/>}):""}
            {overlay? <KeeperDetails overlayHandler={setOverlayOff} data={overlayData}/>:""}
        </div>
    );
}