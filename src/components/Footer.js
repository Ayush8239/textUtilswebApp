import React from 'react'
import github from './Icons/github.png'
import linkedin from './Icons/linkedin.png'
import instagram from './Icons/instagram.png'
export default function Footer(props) {

    const iconStyle = {
        width: '30px',
        height: '30px',
        marginLeft: '10px',
        marginTop: '10px'
        //   borderRadius: '50%',
        //   border: '2px solid #007bff',
        // Add more styles as needed
    }
    return (
        <div>
            <footer className={`text-${props.txtcolor} `}
                style={{ backgroundColor: (props.mode === 'dark') ? '#181818' : '#e7e8e9' }}>
                <div className='py-5 text-center '>
                    <h1>Contact Us</h1>
                    <div className="py-5">
                        <h6 >Designed and Developed by Ayush Agarwal</h6>
                        <a><img src={github} alt="email" style={{
                            width: '40px',
                            height: '40px',
                            marginLeft: '10px',
                            marginRight : '-2px',
                            marginTop: '10px'
                        }} /></a>
                        <a target="_blank" href="https://instagram.com/_agrawal_aayush?igshid=YmMyMTA2M2Y="><img className="social_media_icons"
                            src={instagram} alt="instagram" style={iconStyle} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/ayush-agarwal-9b8998238/"><img src={linkedin} alt="linkedin" style={iconStyle} /></a>


                    </div>
                </div>

            </footer>
        </div>
    )
}
