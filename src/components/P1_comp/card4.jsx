import google from '../../Icon/google.svg';
import {React,useState} from 'react'
import { applications } from '../../pages/data';
import  Axios  from 'axios';

const C4 = ({arr,colour,info,disable,company,client}) => {

    const myStyle = {
        backgroundColor : colour+"30",
        color : colour,
    };
    const [apply, setApply] = useState('Apply now');
    const [dis, setDis] = useState(disable);
const applyJob = async ()=>{
    setDis(true);
    setApply('Applied');
    try {
        Axios.put(`https://jobifybackend-pjf3.onrender.com/clientRoute/applyJob/${client}`, {
          jobId: arr._id,
          userId: client,
        }).then((res)=>{
            if(res.status===200){
                alert("Applied successfully");
            }
            else{
                alert("failed");
            }
        }).catch((err)=>alert(err));
      } catch (error) {
        console.error(error);
        console.log('Application failed');
      }
      console.log(arr.hrId);
      Axios.put(`https://jobifybackend-pjf3.onrender.com/doctorRoute/applicationsReceived/${arr.hrId}`,{jobId:arr._id,userId:client,hrId:arr.hrId}).
      then((res)=>{
        if(res.status===200){

        }
        else{
            alert("fail received");
        }
      }).catch((err)=>alert(err));
    applications.push({
        id:arr.id,
        img:info.dp,
        name:info.username,
        title:arr.head,
        rating:arr.rating,
        bio:arr.body,
        resume:info.resume,
        status:''
    })
};

  return (
    <div className='shadow p-3 rounded-3 d-flex flex-column justify-content-between gap-4 col-3'>
        <div className='d-flex flex-column gap-3'>
            <div className='d-flex flex-row gap-3'>
                <div className='py-2 px-3 rounded-3 text-center d-flex align-items-center' style={myStyle}><h2 className='body fw-bold m-0 tablet'>{arr.title}</h2></div>
                <div className='py-2 px-3 rounded-3 text-center d-flex align-items-center' style={{backgroundColor:"#F3F3F3"}}><h2 className='body fw-bold m-0 tablet'>{arr.jobMode}</h2></div>   
            </div>
            <div className='text-start d-flex flex-column gap-3'>
                    <div className='sub-head fw-bold'>
                        {arr.title}
                    </div>
                    <div className='body'>
                        {arr.description}
                    </div> 
                </div>
        </div>
        <div className='d-flex flex-column justify-content-between'>
            <div className='d-flex flex-row gap-3'>
                <div className='d-flex flex-row align-items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M13.9997 13.4168C13.2261 13.4168 12.4843 13.1095 11.9373 12.5626C11.3903 12.0156 11.083 11.2737 11.083 10.5002C11.083 9.72661 11.3903 8.98475 11.9373 8.43777C12.4843 7.89079 13.2261 7.5835 13.9997 7.5835C14.7732 7.5835 15.5151 7.89079 16.0621 8.43777C16.6091 8.98475 16.9163 9.72661 16.9163 10.5002C16.9163 10.8832 16.8409 11.2625 16.6943 11.6163C16.5477 11.9702 16.3329 12.2917 16.0621 12.5626C15.7912 12.8334 15.4697 13.0482 15.1158 13.1948C14.762 13.3414 14.3827 13.4168 13.9997 13.4168ZM13.9997 2.3335C11.8337 2.3335 9.75652 3.19391 8.22497 4.72546C6.69342 6.257 5.83301 8.33423 5.83301 10.5002C5.83301 16.6252 13.9997 25.6668 13.9997 25.6668C13.9997 25.6668 22.1663 16.6252 22.1663 10.5002C22.1663 8.33423 21.3059 6.257 19.7744 4.72546C18.2428 3.19391 16.1656 2.3335 13.9997 2.3335Z" fill="black"/>
                    </svg>
                    <p className='body m-0'>{arr.location}</p>
                </div>
                <div className='d-flex flex-row align-items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0603 1.4585H13.939C12.8902 1.4585 12.0163 1.4585 11.3233 1.55183C10.5907 1.64983 9.92917 1.86683 9.39834 2.39766C8.86634 2.92966 8.64934 3.59116 8.55134 4.32266C8.48484 4.82083 8.46501 6.00966 8.46034 7.02933C6.10134 7.1075 4.68384 7.38283 3.70034 8.3675C2.33301 9.73366 2.33301 11.934 2.33301 16.3335C2.33301 20.733 2.33301 22.9333 3.70034 24.2995C5.06651 25.6668 7.26684 25.6668 11.6663 25.6668H16.333C20.7325 25.6668 22.9328 25.6668 24.299 24.2995C25.6663 22.9333 25.6663 20.733 25.6663 16.3335C25.6663 11.934 25.6663 9.73366 24.299 8.3675C23.3155 7.38283 21.898 7.1075 19.539 7.0305C19.5343 6.00966 19.5157 4.82083 19.448 4.32383C19.35 3.59116 19.133 2.92966 18.601 2.39883C18.0702 1.86683 17.4087 1.64983 16.676 1.55183C15.983 1.4585 15.108 1.4585 14.0603 1.4585ZM17.789 7.0025C17.7832 6.01433 17.7668 4.9515 17.7143 4.556C17.6408 4.01816 17.516 3.78716 17.3643 3.6355C17.2127 3.48383 16.9817 3.359 16.4427 3.2855C15.8803 3.21083 15.1243 3.2085 13.9997 3.2085C12.875 3.2085 12.119 3.21083 11.5555 3.28666C11.0177 3.359 10.7867 3.48383 10.635 3.63666C10.4833 3.78833 10.3585 4.01816 10.285 4.556C10.2325 4.95266 10.215 6.01433 10.2103 7.0025C10.6665 7.00016 11.153 7.00016 11.6663 7.00016H16.333C16.8475 7.00016 17.3328 7.00016 17.789 7.0025ZM13.9997 10.7918C14.2317 10.7918 14.4543 10.884 14.6184 11.0481C14.7825 11.2122 14.8747 11.4348 14.8747 11.6668V11.6785C16.1452 11.9982 17.208 13.0003 17.208 14.3887C17.208 14.6207 17.1158 14.8433 16.9517 15.0074C16.7876 15.1715 16.5651 15.2637 16.333 15.2637C16.1009 15.2637 15.8784 15.1715 15.7143 15.0074C15.5502 14.8433 15.458 14.6207 15.458 14.3887C15.458 13.9407 14.961 13.32 13.9997 13.32C13.0383 13.32 12.5413 13.9407 12.5413 14.3887C12.5413 14.8367 13.0383 15.4585 13.9997 15.4585C15.6155 15.4585 17.208 16.5785 17.208 18.2783C17.208 19.6667 16.1452 20.6677 14.8747 20.9885V21.0002C14.8747 21.2322 14.7825 21.4548 14.6184 21.6189C14.4543 21.783 14.2317 21.8752 13.9997 21.8752C13.7676 21.8752 13.5451 21.783 13.381 21.6189C13.2169 21.4548 13.1247 21.2322 13.1247 21.0002V20.9885C11.8542 20.6688 10.7913 19.6667 10.7913 18.2783C10.7913 18.0463 10.8835 17.8237 11.0476 17.6596C11.2117 17.4955 11.4343 17.4033 11.6663 17.4033C11.8984 17.4033 12.121 17.4955 12.2851 17.6596C12.4492 17.8237 12.5413 18.0463 12.5413 18.2783C12.5413 18.7263 13.0383 19.347 13.9997 19.347C14.961 19.347 15.458 18.7263 15.458 18.2783C15.458 17.8303 14.961 17.2085 13.9997 17.2085C12.3838 17.2085 10.7913 16.0885 10.7913 14.3887C10.7913 13.0003 11.8542 11.9982 13.1247 11.6785V11.6668C13.1247 11.4348 13.2169 11.2122 13.381 11.0481C13.5451 10.884 13.7676 10.7918 13.9997 10.7918Z" fill="black"/>
                    </svg>
                    <p className='body m-0'>{arr.salary}</p>
                </div>
            </div>
            <hr/>
            <div className='d-flex flex-row justify-content-between'>
                <div className='d-flex flex-row align-items-center gap-2'>
                    <img src={google}/>
                    <p className='m-0 body'>{company}</p>
                </div>
                <button className='btn btn-light d-flex flex-row align-items-center gap-1' disabled={dis} onClick={applyJob}>
                    <p className='body fw-bold text-primary m-0'>{apply}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                        <path d="M23.0262 10.8435L14.5887 19.281C14.3245 19.5451 13.9662 19.6936 13.5926 19.6936C13.219 19.6936 12.8607 19.5451 12.5965 19.281C12.3323 19.0168 12.1839 18.6585 12.1839 18.2849C12.1839 17.9113 12.3323 17.5529 12.5965 17.2888L18.6328 11.2548H1.40625C1.03329 11.2548 0.675604 11.1066 0.411881 10.8429C0.148158 10.5792 0 10.2215 0 9.84853C0 9.47557 0.148158 9.11789 0.411881 8.85416C0.675604 8.59044 1.03329 8.44228 1.40625 8.44228H18.6328L12.5988 2.40478C12.3346 2.1406 12.1862 1.7823 12.1862 1.40869C12.1862 1.03508 12.3346 0.676776 12.5988 0.412595C12.863 0.148415 13.2213 5.56719e-09 13.5949 0C13.9685 -5.56719e-09 14.3268 0.148415 14.591 0.412595L23.0285 8.85009C23.1596 8.98092 23.2636 9.13635 23.3345 9.30748C23.4054 9.4786 23.4418 9.66204 23.4415 9.84726C23.4413 10.0325 23.4045 10.2158 23.3332 10.3868C23.262 10.5578 23.1576 10.7129 23.0262 10.8435Z" fill="#437BFA"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default C4;