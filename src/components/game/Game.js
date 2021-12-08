import React ,{useState , useEffect} from 'react'
import "./Game.css"
export default function Game() {
 const [playerOptions, setplayerOptions] = useState(Array(9).fill(""));
 const [currentOptions, setcurrentOptions] = useState("✘")
const [winner, setwinner] = useState("")
 //componentDidMount  تنفذ مره وحده
 useEffect(() => {
const winnerList=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
for (let i=0 ;i<winnerList.length;i++){
    let a = winnerList[i][0];
    let b = winnerList[i][1];
    let c = winnerList[i][2];
    if(playerOptions[a]==="✘" && playerOptions[b]==="✘" && playerOptions[c]==="✘"  ){
        setwinner("✘ is winner")
    }
    if(playerOptions[a]==="𝒪" && playerOptions[b]==="𝒪" && playerOptions[c]==="𝒪"  ){
        setwinner("𝒪 is winner")
    }
}
}, [playerOptions])


 const handleCilick=(i)=>{
    if (playerOptions[i]==="" && winner ===""){
        const arr=[...playerOptions];
        arr[i]=currentOptions;
        setplayerOptions(arr)
        
        if(currentOptions ==="✘"){
             setcurrentOptions("𝒪")
        }else{
            setcurrentOptions("✘")
        }  
      }
 

 }

 const restGame=()=>{
 
    window.location.reload();
 }
 return (
        <div>

         <h1 className="h1">Tic Tac Toe Game (X-O)</h1>
          <div className="cells">
            <div onClick={()=>{handleCilick(0)}}>{playerOptions[0]}</div>
            <div onClick={()=>{handleCilick(1)}}>{playerOptions[1]}</div>
            <div onClick={()=>{handleCilick(2)}}>{playerOptions[2]}</div>
            <div onClick={()=>{handleCilick(3)}}>{playerOptions[3]}</div>
            <div onClick={()=>{handleCilick(4)}}>{playerOptions[4]}</div>
            <div onClick={()=>{handleCilick(5)}}>{playerOptions[5]}</div>
            <div onClick={()=>{handleCilick(6)}}>{playerOptions[6]}</div>
            <div onClick={()=>{handleCilick(7)}}>{playerOptions[7]}</div>
            <div onClick={()=>{handleCilick(8)}}>{playerOptions[8]}</div>

           </div> 

<h1 className="h11">{winner}</h1>
<button className="but" onClick={()=>{restGame()}}>♻</button>
       </div>
    )
}
