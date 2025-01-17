// import React from 'react';
// import '../styles.css';

// const H1 = () => {
//   return (
//     <div className='bg-blue py-3'>
//         {/* text */}
//         <div className='py-4 col-8 mx-auto my-5 mb-4 d-flex flex-column text-center'>
//             <h6 className='text-primary fw-bold sub-head'>Find your dream</h6>
//             <h1 className='head mb-4'>Empowering your well-being with personalised solutions <span className='grad'>MediBot!</span></h1>
//             <h6 className='body col-10 mx-auto'>Our platform is dedicated to helping you discover, apply, and succeed in your dream career.
//                 MediBot, where opportunities meet ambition.</h6>
//         </div>
//     </div>
//   )
// }

// export default H1
import React from 'react';
import '../styles.css';

const H1 = () => {
  return (
    <div className='bg-blue py-5' style={{backgroundColor:"#ECF5FE"}}>
        {/* text */}
        <div className='py-4 col-8 mx-auto my-5 mb-4 d-flex flex-column text-center'>
            <h6 className='text-primary fw-bold sub-head'>Find your dream</h6>
            <h1 className='head mb-4'>Empowering your well-being with personalised solutions <span className='grad'>MediBot!</span></h1>
            <h6 className='body col-10 mx-auto'>Our platform is dedicated to helping you discover, apply, and succeed in your dream career.
                MediBot, where opportunities meet ambition.</h6>
        </div>
        {/* search */}
        <div className='d-flex flex-row align-items-center justify-content-between my-5 bg-white rounded-3 shadow col-7 mx-auto py-3 px-5'>
            <div className='d-flex flex-row gap-3 align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.2939 12.5786H13.3905L13.0703 12.2699C14.2297 10.9251 14.8669 9.20834 14.8656 7.43282C14.8656 5.96275 14.4297 4.52569 13.613 3.30337C12.7963 2.08105 11.6354 1.12837 10.2772 0.565793C8.91907 0.00322052 7.42457 -0.143974 5.98275 0.142823C4.54092 0.42962 3.21652 1.13753 2.17702 2.17702C1.13753 3.21652 0.42962 4.54092 0.142823 5.98275C-0.143974 7.42457 0.00322052 8.91907 0.565793 10.2772C1.12837 11.6354 2.08105 12.7963 3.30337 13.613C4.52569 14.4297 5.96275 14.8656 7.43282 14.8656C9.27387 14.8656 10.9663 14.191 12.2699 13.0703L12.5786 13.3905V14.2939L18.2962 20L20 18.2962L14.2939 12.5786ZM7.43282 12.5786C4.58548 12.5786 2.28702 10.2802 2.28702 7.43282C2.28702 4.58548 4.58548 2.28702 7.43282 2.28702C10.2802 2.28702 12.5786 4.58548 12.5786 7.43282C12.5786 10.2802 10.2802 12.5786 7.43282 12.5786Z" fill="black"/>
              </svg>
              <input className='search-input form-control' placeholder=''/>
            </div>
            <div style={{width:1, height:42, backgroundColor:'rgb(0, 0, 0, 0.33)'}}></div>
            <div className='d-flex flex-row gap-3 align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 20.9988L9.28875 20.1123C10.1838 19.0899 10.9888 18.1199 11.705 17.1972L12.2962 16.4192C14.765 13.1015 16 10.4682 16 8.52197C16 4.36762 12.6425 1 8.5 1C4.3575 1 1 4.36762 1 8.52197C1 10.4682 2.235 13.1015 4.70375 16.4192L5.295 17.1972C6.3168 18.5031 7.38584 19.7703 8.5 20.9988Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.5 11.5978C10.2259 11.5978 11.625 10.2023 11.625 8.48078C11.625 6.7593 10.2259 5.36377 8.5 5.36377C6.77411 5.36377 5.375 6.7593 5.375 8.48078C5.375 10.2023 6.77411 11.5978 8.5 11.5978Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <input className='search-input form-control' placeholder=''/>
            </div>
            <div>
                <button className='btn btn-primary px-4 py-1'>Explore</button>
            </div>
        </div>
        {/* uploads */}
        {/* <div className='d-flex flex-row justify-content-around col-6 mx-auto pb-3 mb-5'>
            <div className='d-flex flex-row justify-content-between bg-white p-2 col-4 align-items-center shadow rounded-3'>
                <p className='m-0 ps-2'>Upload your CV</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                       <rect width="36" height="36" rx="5" fill="#FEC200"/>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4245 23.2813C15.9973 23.2815 15.5855 23.1215 15.2704 22.833C14.9554 22.5444 14.76 22.1482 14.7227 21.7226C14.5612 19.8789 14.5203 18.0267 14.6003 16.1777C14.5037 16.1712 14.4072 16.1643 14.3107 16.1571L12.6055 16.0335C12.3565 16.0153 12.1164 15.9327 11.9089 15.7939C11.7013 15.6551 11.5334 15.4648 11.4215 15.2415C11.3096 15.0183 11.2575 14.7699 11.2705 14.5205C11.2835 14.2711 11.3609 14.0294 11.4954 13.819C12.7508 11.8551 15.05 9.65774 16.943 8.29813C17.213 8.10427 17.537 8 17.8694 8C18.2018 8 18.5258 8.10427 18.7958 8.29813C20.6876 9.65774 22.9868 11.8551 24.2412 13.819C24.3756 14.0294 24.4531 14.2711 24.466 14.5205C24.479 14.7699 24.427 15.0183 24.3151 15.2415C24.2032 15.4648 24.0352 15.6551 23.8277 15.7939C23.6201 15.9327 23.3801 16.0153 23.131 16.0335L21.4258 16.1571L21.1374 16.1777C21.2175 18.0271 21.1763 19.8789 21.0149 21.7226C20.9777 22.1482 20.7823 22.5444 20.4672 22.833C20.1522 23.1215 19.7404 23.2815 19.3131 23.2813H16.4245ZM16.3604 15.4246C16.2301 17.4702 16.2542 19.5227 16.4325 21.5646H19.3051C19.4837 19.5229 19.5077 17.4709 19.3784 15.4246C19.3713 15.3112 19.3867 15.1976 19.4239 15.0902C19.4611 14.9828 19.5192 14.8839 19.5949 14.7991C19.6706 14.7144 19.7623 14.6455 19.8649 14.5965C19.9674 14.5475 20.0786 14.5193 20.1921 14.5137C20.5629 14.4953 20.9325 14.4725 21.3022 14.445L22.5394 14.3557C21.4406 12.7371 20.0653 11.3246 18.4765 10.183L17.8688 9.74701L17.2611 10.183C15.6723 11.3246 14.2971 12.737 13.1983 14.3557L14.4355 14.4461C14.8051 14.4725 15.1759 14.4953 15.5456 14.5137C15.6591 14.5193 15.7703 14.5475 15.8728 14.5965C15.9753 14.6455 16.0671 14.7144 16.1428 14.7991C16.2185 14.8839 16.2766 14.9828 16.3138 15.0902C16.3509 15.1976 16.3664 15.3112 16.3593 15.4246H16.3604Z" fill="white"/>
                       <path d="M10.7167 23.7082C10.7167 23.4805 10.6262 23.2622 10.4653 23.1013C10.3043 22.9403 10.086 22.8499 9.85834 22.8499C9.63069 22.8499 9.41237 22.9403 9.2514 23.1013C9.09043 23.2622 9 23.4805 9 23.7082V25.9971C9 27.1026 9.89725 27.9999 11.0028 27.9999H24.7362C25.2674 27.9999 25.7768 27.7889 26.1524 27.4133C26.528 27.0377 26.739 26.5283 26.739 25.9971V23.7082C26.739 23.4805 26.6486 23.2622 26.4876 23.1013C26.3267 22.9403 26.1083 22.8499 25.8807 22.8499C25.653 22.8499 25.4347 22.9403 25.2738 23.1013C25.1128 23.2622 25.0224 23.4805 25.0224 23.7082V25.9971C25.0224 26.073 24.9922 26.1458 24.9386 26.1994C24.8849 26.2531 24.8121 26.2832 24.7362 26.2832H11.0028C10.9269 26.2832 10.8541 26.2531 10.8005 26.1994C10.7468 26.1458 10.7167 26.073 10.7167 25.9971V23.7082Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-between bg-white p-2 col-4 align-items-center shadow rounded-3'>
                <p className='m-0 ps-2'>Work Enquiry Form</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <rect width="36" height="36" rx="5" fill="#F3287A"/>
                        <path d="M21.5385 9.53857H23.8462C24.2542 9.53857 24.6455 9.70066 24.934 9.98918C25.2225 10.2777 25.3846 10.669 25.3846 11.077V26.4617C25.3846 26.8697 25.2225 27.261 24.934 27.5495C24.6455 27.838 24.2542 28.0001 23.8462 28.0001H11.5385C11.1304 28.0001 10.7391 27.838 10.4506 27.5495C10.1621 27.261 10 26.8697 10 26.4617V11.077C10 10.669 10.1621 10.2777 10.4506 9.98918C10.7391 9.70066 11.1304 9.53857 11.5385 9.53857H13.8462" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.9995 8H15.3842C14.5345 8 13.8457 8.68879 13.8457 9.53846V10.3077C13.8457 11.1574 14.5345 11.8462 15.3842 11.8462H19.9995C20.8492 11.8462 21.538 11.1574 21.538 10.3077V9.53846C21.538 8.68879 20.8492 8 19.9995 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.8457 15.6924H21.538M13.8457 19.5385H21.538M13.8457 23.3847H21.538" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default H1
