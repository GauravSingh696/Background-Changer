import React, { useState } from 'react'

const color_changer = () => {
    const [color, setColor] = useState('white');
    const value = 'cursor-pointer border-solid border-1 text-xl w-20 p-1 rounded-xl bg-blue-400';

    return (
        <><div>
            <div className='flex items-end justify-center h-screen' style={{backgroundColor:color}} id='color'>
                <div className='mb-[50px] flex flex-wrap justify-around gap-3 bg-indigo-300 border-1 rounded-3xl p-4 w-5xl'>
                    <button onClick={()=>setColor('green')} className={value} style={{backgroundColor:'green'}}>Green</button>
                    <button onClick={()=>setColor('black')} className={value} style={{backgroundColor:'black',color:'white'}}>Black</button>
                    <button onClick={()=>setColor('blue')} className={value} style={{backgroundColor:'blue'}}>Blue</button>
                    <button onClick={()=>setColor('cyan')} className={value} style={{backgroundColor:'cyan'}}>Cyan</button>
                    <button onClick={()=>setColor('red')} className={value} style={{backgroundColor:'red'}}>Red</button>
                    <button onClick={()=>setColor('gray')} className={value} style={{backgroundColor:'gray'}}>Gray</button>
                    <button onClick={()=>setColor('yellow')} className={value} style={{backgroundColor:'yellow'}}>Yellow</button>
                    <button onClick={()=>setColor('purple')} className={value} style={{backgroundColor:'purple'}}>Purple</button>
                    <button onClick={()=>setColor('orange')} className={value} style={{backgroundColor:'orange'}}>Orange</button>
                    <button onClick={()=>setColor('pink')} className={value} style={{backgroundColor:'pink'}}>Pink</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default color_changer
