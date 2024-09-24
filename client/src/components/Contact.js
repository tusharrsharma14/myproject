import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [msg, setMsg] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  // Handle Inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const { firstname, lastname, email, message } = msg;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to
      // Submit it on Backend which is on
      // Port 3001. So we need Proxy.
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          message,
        }),
      });
      console.log(res.status);
      if (res.status === 400 || !res) {
        window.alert("Message Not Sent. Try Again Later");
      } else {
        // You need to Restart the Server for Proxy Works
        // Now Try Again
        window.alert("Message Sent");
        setMsg({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <header className="header-contact">
        <h3 className="heading-contact">Contacts</h3>
      </header>
      <div className="cont">
        <section id="contact">
          <div className="container my-5 py-5">
            <div className="row mb-5">
              <div className="col-12">
                <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                <h1 className="display-6 text-center mb-4">
                  Have Some <b>Question?</b>
                </h1>

                <hr className="w-25 mx-auto" />
                <br></br>
                <hr className="w-25 mx-auto" />
                <br></br>
                <hr className="w-25 mx-auto" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={handleSubmit} method="POST">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Smith"
                      name="firstname"
                      value={msg.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="John Smith"
                      name="lastname"
                      value={msg.lastname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      name="email"
                      value={msg.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      name="message"
                      value={msg.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary rounded-pill px-4"
                  >
                    Send Message <i className="fa fa-paper-plane ms-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;

