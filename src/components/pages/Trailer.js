import React from 'react'
import './Trailer.css'

function Trailer() {
    return (
        <div>
            <video className="my-video1" width="800" height="340" controls>
                <source src='https://firebasestorage.googleapis.com/v0/b/finalproject1-dc09c.appspot.com/o/Youtube%2FGREENLAND%20-%20LAND%20OF%20ICE%204K.mp4?alt=media&token=7d68a35a-95a0-4d55-9370-e93ef1083bc7'
                    type='video/mp4' /> </video>
            <video className="my-video1" width="800" height="340" controls>
                <source src='https://firebasestorage.googleapis.com/v0/b/finalproject1-dc09c.appspot.com/o/Youtube%2FClimbing%20Mt.%20Fuji%20off-season%20winter%202017.mp4?alt=media&token=7c3b8c29-73e7-4430-9141-f0b5e31b50fb' type='video/mp4' />
            </video>
            <video className="my-video1" width="800" height="340" controls >
                <source src='https://firebasestorage.googleapis.com/v0/b/finalproject1-dc09c.appspot.com/o/Youtube%2FIguazu%20Falls%20Boat%20Ride%20Adventure%20in%20Argentina!.mp4?alt=media&token=b1275225-fec6-4aea-9bab-9472b67bea05' type='video/mp4' />
            </video>
            <video className="my-video1" width="800" height="340" controls>
                <source src='https://firebasestorage.googleapis.com/v0/b/finalproject1-dc09c.appspot.com/o/Youtube%2FInca%20Trail%20vs%20Salkantay%20Trek%20to%20Machu%20Picchu.mp4?alt=media&token=f208947f-9643-4be7-871d-e4f97a9fba09' type='video/mp4' />
            </video>
            <video className="my-video1" width="800" height="340" controls>
                <source src='https://firebasestorage.googleapis.com/v0/b/finalproject1-dc09c.appspot.com/o/Youtube%2FSCUBA%20Diving%20Egypt%20Red%20Sea%20-%20Underwater%20Video%20HD.mp4?alt=media&token=e6d4aaf7-33a8-4c6d-a47d-daafd0c81ff4' type='video/mp4' />
            </video>
            <video className="my-video1" width="800" height="340" controls>
                <source src="https://firebasestorage.googleapis.com/v0/b/finalproject1-dc09c.appspot.com/o/Youtube%2FSleeping%20in%20Iceland's%20Bubble%20Hotel%20under%20the%20Northern%20Lights!.mp4?alt=media&token=3b12162a-d3fa-4469-8e55-a4419a84843b"
                    type='video/mp4' />
            </video>
            <video className="my-video1" width="800" height="340" controls>
                <source src="https://firebasestorage.googleapis.com/v0/b/finalproject1-dc09c.appspot.com/o/Youtube%2FThe%20Great%20Wall%20of%20China_%20Hiking%20%26%20Camping!.mp4?alt=media&token=1a22a601-596d-47fe-892c-dbcf8bb1e77f"
                    type='video/mp4' />
            </video>
            <video width="800" height="340" controls>
                <source src='link from firebase' type='video/mp4' />
            </video>
        </div>
    )
}

export default Trailer
