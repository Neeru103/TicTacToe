import React, { useEffect, useState } from 'react'
import './TicTacToe.css'
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';

function TicTacToe() {
  const [Xturn,setXturn]=useState(true);
  
  const [PlayerTurn,setPlayerTurn]=useState('X-Turn');
  const [winner,setWinner]=useState();
  const [start,setStart]=useState(false);
  
  const [icons,setIcons]=useState([['','',''],['','',''],['','','']]);

  function handleStart()
  {
    setStart(true);
  }

  function isGame() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (icons[i][0] === icons[i][1] && icons[i][1] === icons[i][2] && icons[i][0] !== '') {
            return icons[i][0];
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (icons[0][i] === icons[1][i] && icons[1][i] === icons[2][i] && icons[0][i] !== '') {
            return icons[0][i];
        }
    }

    // Check diagonals
    if (icons[0][0] === icons[1][1] && icons[1][1] === icons[2][2] && icons[0][0] !== '') {
        return icons[0][0];
    }
    if (icons[0][2] === icons[1][1] && icons[1][1] === icons[2][0] && icons[0][2] !== '') {
        return icons[0][2];
    }

    return null; // No winner
}
 
  function handleClick(i,j)
  {
  
          if(start===false)
          {
            alert('please start the game');
            return;
          }
          if(icons[i][j]!=='' || winner)
              return;

          const currentIcon=Xturn?'bi bi-x-lg':'bi bi-circle';

          setIcons((prevIcons)=>{
            const updatedIcons=[...prevIcons];
            updatedIcons[i][j]=currentIcon;

            const newWinner=isGame();
        
           if(newWinner)
           {
               
                 setWinner(newWinner==='bi bi-circle'?'O-wins':'X-wins');
           }
           else{
            setXturn(!Xturn);
            setPlayerTurn(Xturn?'O-Turn':'X-Turn');
           }
            return updatedIcons;   
           });
       
        
      
  }
  return (
     
    <div className='text-white d-flex justify-content-center align-items-center' style={{minHeight:'100vh'}}>
        <div>
            <div style={{fontFamily:'Georgia',fontSize:'40px'}}>
                Tic Tac Toe - Have Fun!!
            </div>
            <div style={{fontFamily:'Georgia',fontSize:'40px',marginLeft:'130px'}}>
             
              <p>{winner?'':PlayerTurn}</p>
              <p style={{fontSize:'50px',color:'#008080'}}>{winner?winner:''}</p>
             
            </div>
            <div className='board'>
             
                <div >
                <div className='boxes justify-content-center align-items-center' onClick={()=>handleClick(0,0)}>
                  <span  className={icons[0][0]} style={{fontSize:'70px'}}></span>
                </div>
                <div className='boxes justify-content-center align-items-center' onClick={()=>handleClick(1,0)}>
                  <span className={icons[1][0]} style={{fontSize:'70px'}}></span>
                </div>
                <div className='boxes justify-content-center align-items-center' onClick={()=>handleClick(2,0)}>
                  <span className={icons[2][0]} style={{fontSize:'70px'}}></span>
                </div>
              </div>
              
                <div>
                <div className='boxes justify-content-center align-items-center' onClick={()=>handleClick(0,1)}>
                  <span  className={icons[0][1]}  style={{fontSize:'70px'}}></span>
                </div>
                <div className='boxes justify-content-center align-items-center' onClick={()=>handleClick(1,1)}>
                  <span  className={icons[1][1]}  style={{fontSize:'70px'}}></span>
                </div>
                <div className='boxes justify-content-center align-items-center' onClick={()=>handleClick(2,1)}>
                  <span  className={icons[2][1]}  style={{fontSize:'70px'}}></span>
                </div>
              </div>
          
             <div>
              <div className='boxes justify-content-center align-items-center' onClick={()=>handleClick(0,2)}>
                  <span  className={icons[0][2]}  style={{fontSize:'70px'}}></span>
                </div>
                <div className='boxes justify-content-center align-items-center' onClick={()=>handleClick(1,2)}>
                  <span  className={icons[1][2]}  style={{fontSize:'70px'}}></span>
                </div>
                <div className='boxes justify-content-center align-items-center' onClick={()=>handleClick(2,2)}>
                  <span   className={icons[2][2]} style={{fontSize:'70px'}}></span>
                </div>
              </div>
                
             
            </div>

            <div>
              <button className='btn btn-danger'  style={{marginLeft:'150px',marginTop:'10px'}} disabled={start}  onClick={handleStart}>Start Game</button>
            </div>
        </div>
       
    </div>
       
  )
}

export default TicTacToe