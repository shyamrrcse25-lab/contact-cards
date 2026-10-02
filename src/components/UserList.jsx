import ContactCard from "./ContactCard";

function UserList({ contacts, deleteContact }) {
  return (
    <div className="user-list">
      <h2>Contact List</h2>

      {contacts.length === 0 ? (
        <p>No contacts added yet.</p>
      ) : (
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
}

export default UserList;