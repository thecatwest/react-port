import React from "react";


function ContactCard(){
//   const style = {
//     // display: "inline",
//     justifyContent: "center",
//     alignItems: "center",
// };

    return (
      <section className="contact-card">
        <h1 id="contact">Contact</h1>

        <h3 id="contact">Want to work together? Let's chat!</h3>
        <form id="contact-form">
          <div className="textBox">
            <label htmlFor="name">name: </label>
            <input type="text" name="name" />
          </div>
          <div className="textBox">
            <label htmlFor="email">email: </label>
            <input type="email" name="email" />
          </div>
          <div className="textBox">
            <label htmlFor="message"></label>
            <textarea name="message" placeholder="tell me about it: " rows="5" columns="10" />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    );
}


export default ContactCard