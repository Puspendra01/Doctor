import React, { useEffect, useState } from 'react';
import Userimages from './Userimage.json';
import styles from './UserImage.css'
import { hover } from '@testing-library/user-event/dist/hover';

const UserImages = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(Userimages);
    
  }, []);

  return (
    <>
    <h1 style={{textAlign:'center'}}>Select Doctor</h1>
    <hr style={{width: '150px',height: '3px', backgroundColor:'lightgreen',border: 'lightgreen'}}/>
    <br/>
    <marquee behavior="scroll" scrollamount="12" direction="left">
    
  <div className={styles.userList} style={{display:'flex'}}>
      {user.map((user, index) => (
        <div key={index} className={styles.user}>
          <div style={{paddingRight:'20px'}}>
          <img src={user.image} style={{height:'210px', width:'210px'}} alt={user.name}/>
          </div>
          <button style={{border:'transparent',height:'80px', width:'210px',paddingTop:'35px', backgroundColor:'lightgreen'}}>         
          <h3 style={{marginTop:'-20px',textAlign:'center',}}>{user.name}</h3>
          <br/><br/>
          <h3 style={{marginTop:'-30px',textAlign:'center',}}>{user.types}</h3>
          </button>
        </div>
      ))}
    </div></marquee>
    </>
  );
};

export default UserImages;