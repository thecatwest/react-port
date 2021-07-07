import React from "react";



function ContactCard(){
    return (
      <section>
        <h1>Want to work together? Let's chat!</h1>
        <form id="contact-form">
          <div>
            <label htmlFor="name">name:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email">email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">tell me about it:</label>
            <textarea name="message" rows="5" />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    );
}


export default ContactCard