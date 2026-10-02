import { useState } from "react";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }

    const newContact = {
      id: Date.now(),
      name: name,
      email: email,
      phone: phone,
    };

    addContact(newContact);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="contact-form">
      <h2>Add Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default ContactForm;