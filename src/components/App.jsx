import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [submittedContact, setSubmittedContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function onChange(event) {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    switch (name) {
      case "fName":
        setContact({
          fName: value,
          lName: contact.lName,
          email: contact.email
        });
        break;

      case "lName":
        setContact({
          fName: contact.fName,
          lName: value,
          email: contact.email
        });
        break;

      case "email":
        setContact({
          fName: contact.fName,
          lName: contact.lName,
          email: value
        });
        break;

      default:
        break;
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    setSubmittedContact(contact);
    setContact({
      fName: "",
      lName: "",
      email: ""
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {submittedContact.fName} {submittedContact.lName}
      </h1>
      <p>{submittedContact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={onChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={onChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={contact.email}
        />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
