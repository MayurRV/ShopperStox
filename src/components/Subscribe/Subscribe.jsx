
import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our Newsletter and stay updated</p>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email Id"
        />
        <button
          onClick={() =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
              ? (setError(''), alert('Subscribed Successfully!'))
              : setError('Please enter a valid email address')
          }
        >
          Subscribe
        </button>
      </div>
      {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
    </div>
  );
};

export default Subscribe;




///////////////////////////////////



// import "./Subscribe.css"


// const Subscribe = () => {

//   const [email,setEmail]=useState(' ')

//   return (
//     <div className='newsLetter'>

//         <h1>Get Exclusive Offers On Your Email</h1>
//         <p>Subscribe to our NewsLetter and stay update</p>
//         <div>
//             <input type="email" value={email} required placeholder='Enter your EmailId'/>
//             <button onClick={() => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? alert("Invalid email!") : alert("Subscribed Successfully!")}>
//               Subscribe
//             </button>

//         </div>
      
//     </div>
//   )
// }
// import "./Subscribe.css"


// export default Subscribe

