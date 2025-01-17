import {React,useState,useEffect} from "react";
import profile_bg from "../assets/Profile_bg.svg";
import dp from "../assets/dp.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Axios  from "axios";
const Doctorprofile = () => {
  const { state } = useLocation();
  const [doctor,setDoctor]=useState(null);
  const [arr, setArr] = useState({
    username:"",
    email:"",
    phone:"",
    company:"",
    country:"",
    state:"",
    city:"",
    accepted:34,
    shortlisted:35, 
    rejected:2,
});http:
  useEffect(() => {
    Axios.get(`https://medibotbackend.onrender.com/doctorRoute/doctorPage/doctorProfile/${state}`)
    .then((res) => {
      setDoctor((prevDoctor) => {
        setArr({
          username: res.data.username,
          email: res.data.email,
          phone: res.data.phone,
          company: res.data.company,
          state: res.data.state,
          city: res.data.city,
          country: res.data.country,
          accepted: res.data.accepted,
          shortlisted: res.data.shortlisted,
          rejected: res.data.rejected,
        });
        return res.data;
      });
    })
    .catch((err) => alert(err + "hi"));
  },[]);
    const [isEditing, setIsEditing] = useState(false);
    
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const saveChanges = () => {
        setIsEditing(false);
        Axios.put(`https://jobifybackend-pjf3.onrender.com/doctorRoute/doctorprofile/${doctor._id}`,arr).
        then((res)=>{
            if (res.status === 200 && res.data.message === 'Update Successful') {
              setArr(res.data);
              alert("Update successful");
            } else {
              alert("update failed");
            }
          }).catch((err)=>alert(err))
    };

    const changeAvatar = (event) => {
        const input = event.target;
        const img = document.getElementById('avatarImage');
        const file = input.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
    };
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setArr((prevData) => ({ ...prevData, [id]: value }));
    };
    const navigate=useNavigate();
    const handleLogout=()=>{
      navigate("/");
    }
  return (
    (doctor)?
    <div className="mt-5 pt-3">
      <div className="position-relative">
        <div className="bg-primary container-fluid">
          <img className="img" src={profile_bg} alt="" height={300} />
        </div>
        <div className="position-absolute translate-middle-x top-50 start-50 col-10 mx-auto d-flex flex-row justify-content-between">
          {/* Profile */}
          <div className="col-3 card rounded-3 d-flex flex-column bg-white">
            {/* Profile main */}
            <div className="d-flex flex-column align align-items-center pt-4 pb-2 gap-2">
                {/* DP */}
                <div>
                  <div className="avatar-container position-relative mx-auto my-auto"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}>
                    <img 
                      src={dp}
                      alt="Avatar"
                      className="avatar-img w-100"
                      id="avatarImage"
                      style={{
                        height: "150px",
                        borderRadius: "50%",
                        objectFit:'cover'
                      }}
                      
                    />
                    <label
                      htmlFor="avatarInput"
                      className="camera-icon d-flex align-items-center justify-content-center bg-primary position-absolute"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Change Image"
                      style={{
                        bottom: "10px",
                        right: "10px",
                        borderRadius: "50%",
                        padding: "5px",
                        cursor: "pointer",
                        width: "30px",
                        height: "30px",
                        border: '2px solid #fff'
                      }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-camera-fill text-white"
                        viewBox="0 0 16 16">
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                      </svg>
                    </label>
                    <input
                      type="file"
                      id="avatarInput"
                      className="file-input d-none"
                      accept="image/*"
                      onChange={changeAvatar}
                    />
                  </div>
                </div>
                {/* Name */}
                <h2 className="sub-head fw-bold">{arr.username}</h2>
                {/* Rating */}
                <div className=" d-flex flex-row gap-3 mx-auto">
                    <h6>HR Manager</h6>
                </div>
            </div>
            <hr/>
            {/* Applications info  */}
            <div className="d-flex flex-row justify-content-between align-items-center px-4">
                <h3 className="m-0 body fw-bold ">Jobs accepted</h3>
                <p className="m-0 body fw-bold text-warning">{arr.accepted}</p>
            </div>
            <hr/>
            <div className="d-flex flex-row justify-content-between align-items-center px-4">
                <h3 className="m-0 body fw-bold">Jobs shortlisted</h3>
                <p className="m-0 body fw-bold text-success">{arr.shortlisted}</p>
            </div>
            <hr/>
            <div className="d-flex flex-row justify-content-between align-items-center px-4">
                <h3 className="m-0 body fw-bold">Jobs rejected</h3>
                <p className="m-0 body fw-bold text-danger">{arr.rejected}</p>
            </div>
            {/* <hr/> */}
            {/* <div className="d-flex justify-content-center align-items-center pb-3">
                <a className="btn btn-primary body" href={`${arr.linkedIn}`}>View LinkedIn Profile</a>
            </div> */}
          </div>
          {/* Personal details */}
          <form className="col-8 card rounded-3 bg-white">
            <fieldset disabled={!isEditing} className=" d-flex flex-column text-start">
                <div className="d-flex flex-wrap justify-content-between p-3 px-5 gap-3">
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" htmlFor='fname'>User Name</label>
                        <input className="form-control" id="username" value={arr.username} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" htmlFor='email'>Email ID</label>
                        <input className="form-control" id="email" type="email" value={arr.email} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" htmlFor='phone'>Phone number</label>
                        <input className="form-control" id="phone" type="number" value={arr.phone} onChange={handleInputChange}/>
                    </div>
                    
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" htmlFor='country'>Country</label>
                        <input className="form-control" id="country" value={arr.country} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" htmlFor='state'>State</label>
                        <input className="form-control" id="state" value={arr.state} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" htmlFor='city'>City</label>
                        <input className="form-control" id="city" value={arr.city} onChange={handleInputChange}/>
                    </div>
                </div>
                <hr/>
                <div className="d-flex flex-wrap justify-content-between p-3 px-5 gap-3">
                    <div className="d-flex flex-column col-5">
                        <label className="form-label" htmlFor='company'>Company Name</label>
                        <input className="form-control" id="company" value={arr.company} onChange={handleInputChange}/>
                    </div>
                    
                </div>
                <hr/>
                {/* <div className="d-flex flex-wrap justify-content-between p-3 px-5 gap-3">
                    <div className="d-flex flex-column">
                        <label className="form-label" for='skills'>Skills</label>
                        <div className="form-control col-12" style={{ fontSize: '1.0em' }}>
                            {skills.map((skill, index) => (
                                <div key={index} className="badge bg-light text-dark bordered m-1"  style={{
                                  fontSize: 'inherit',
                                  border: '1px solid #ccc',
                                  padding: '5px',
                                  borderRadius: '5px',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                }}>
                                    {skill}
                                    <span
                                        className="badge bg-dark-subtle ms-1"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => removeSkill(skill)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>
                                    </span>
                                </div>
                            ))}
                            <input
                                type="text"
                                className={`form-control ${skillsError ? 'is-invalid' : ''}`}
                                placeholder="Type Your Skills"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onBlur={addSkill}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') addSkill();
                                }}
                            /> 
                        </div>
                    </div>
                </div> */}
            </fieldset>
            {/* <div className="d-flex align-items-center p-3 px-5">
                <a className="btn btn-warning" href={`${arr.resume}`} target='_blank' >View Your Resume</a>
            </div> */}
            <div className="d-flex flex-row justify-content-between px-5 p-3  align-items-center">
                {isEditing ? (
                    <>
                        <button className="btn btn-success" onClick={saveChanges}>Save</button>
                        <button className="btn btn-danger" onClick={toggleEditMode}>Cancel</button>
                    </>
                    ) : (
                    <button className="btn btn-primary" onClick={toggleEditMode}>Edit Profile</button>
                )}
                <button className="btn btn-danger" onClick={handleLogout}>Log out</button>
            </div>
          </form>
        </div>
      </div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
      <div className="my-5 py-5"></div>
    </div>:<div>loading...</div>
  );
};

export default Doctorprofile;