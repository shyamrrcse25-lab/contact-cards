function ContactCard({ contact, deleteContact }) {
  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>

      <p>
        <strong>Email:</strong> {contact.email}
      </p>

      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>

      <button
        className="delete-button"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ContactCard;
