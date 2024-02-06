import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import './ikkinchidars.css'
import ReactPlayer from 'react-player';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';


function IkkinchiDars() {
  return (
    <div className='ikkinchidars'>
        <div>
            <h1><VisibilityOutlinedIcon /> DARSLARNI QANDAY O'ZLASHTIRAMIZ</h1>
            <p>Darslarga qanday yondoshamiz?</p>
            <ReactPlayer className='video-f' url="https://youtu.be/WIKOVdj5RvY" controls/>
            <div className='display'>
                <div className='box'>
                    <a href="https://python.sariq.dev/howto">
                    <div className="next">
                        <h5>Next</h5>
                        <h4>YANGILIKLAR</h4>
                </div>
                    <EastIcon />
                </a>
                </div>

             <div className='box2'>
                <a href="">
                <div className='nextt'>
                    <h5>Previous</h5>
                    <h4>DASTURLASH ASOSLARI</h4>
                    <KeyboardBackspaceOutlinedIcon className='icon' />
                </div>
                </a>
            </div>
            </div>
        </div>

    </div>
  )
}

export default IkkinchiDars