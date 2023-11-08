import React, { useState } from 'react';
import './css/Contactform.css'; // Import your CSS file
// import 'bootstrap/dist/css/bootstrap.min.css';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    inquiryType: 'Rent',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form submission logic here
    // ...

    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      inquiryType: 'Rent',
      message: '',
    });
  };

  return (
    <div className="contact-form-container">
<div class="enquiry-container">
	<div class="map">
	<img src="/buy-house.jpg" alt="Property Manager"style={{width: '223%'}}></img>
	</div>
	<div class="contact-form">
		<h1 class="title">Contact Us</h1>
		<h2 class="subtitle">We are here assist you.</h2>
		<form action="">
			<input type="text" name="name" placeholder="Your Name" />
			<input type="email" name="e-mail" placeholder="Your E-mail Adress" />
			<input type="tel" name="phone" placeholder="Your Phone Number"/>
			<textarea name="text" id="" rows="8" placeholder="Your Message"></textarea>
			<button class="btn-send">Get a Call Back</button>
		</form>
	</div>
</div>
   </div>
  );
}

export default ContactForm;
// import React, { useState } from 'react';
// import './css/Contactform.css'; // Import your CSS file
// // import 'bootstrap/dist/css/bootstrap.min.css';
// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     inquiryType: 'Rent',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Your form submission logic here
//     // ...

//     setFormData({
//       name: '',
//       email: '',
//       phoneNumber: '',
//       inquiryType: 'Rent',
//       message: '',
//     });
//   };

//   return (
//     <div className="contact-form-container">
//       <div className="contact-form">
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phoneNumber">Phone Number:</label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="inquiryType">Inquiry Type:</label>
//             <select
//               id="inquiryType"
//               name="inquiryType"
//               value={formData.inquiryType}
//               onChange={handleChange}
//             >
//               <option value="Rent">Rent</option>
//               <option value="Buy">Buy</option>
//               <option value="Sell">Sell</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//    </div> 
//    </div>
//   );
// }

// export default ContactForm;
