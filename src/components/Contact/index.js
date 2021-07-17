import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <h1 id="contact">Contact</h1>

      <h3>Want to work together? Let's chat!</h3>
      <br />
      <div className="textBox">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" required />
      </div>
      <div className="textBox">
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" required />
      </div>
      <div className="textBox">
        {/* <label htmlFor="message">Message:</label> */}
        <textarea id="message" placeholder="what's on your mind?" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;

// import React from "react";

// function ContactForm(){
// //   const style = {
// //     // display: "inline",
// //     justifyContent: "center",
// //     alignItems: "center",
// // };

//     return (
//       <section className="contact-card">
//         <h1 id="contact">Contact</h1>

//         <h3 id="contact">Want to work together? Let's chat!</h3>
//         <form id="contact-form">
//           <div className="textBox">
//             <label htmlFor="name">name: </label>
//             <input type="text" name="name" />
//           </div>
//           <div className="textBox">
//             <label htmlFor="email">email: </label>
//             <input type="email" name="email" />
//           </div>
//           <div className="textBox">
//             <label htmlFor="message"></label>
//             <textarea name="message" placeholder="tell me about it: " rows="5" columns="10" />
//           </div>
//           <button type="submit">Send</button>
//         </form>
//       </section>
//     );
// }

// export default ContactForm
