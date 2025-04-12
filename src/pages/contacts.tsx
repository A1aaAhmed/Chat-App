/*using js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/contacts.css';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://chatapp-backend-production-445b.up.railway.app/contacts?userId=1')
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching contacts:', err);
        setLoading(false);
      });
  }, []);

  const handleChat = (contactId) => {
    navigate(`/chat/${contactId}`);
  };

  return (
    <div className="contacts-container py-4">
      <h4>👥 Contacts</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="contacts-grid">
          {contacts.map((contact) => (
            <div className="contact-card" key={contact._id}>
              <img src={contact.userImg} alt={contact.name} />
              <p className="contact-name">{contact.name}</p>
              <p className="contact-phone text-muted">{contact.phone}</p>
              <button
                className="btn btn-sm btn-primary mt-2"
                onClick={() => handleChat(contact.id)}
              >
                💬 Chat
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactsPage;*/

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contacts.css";

type Contact = {
  _id: string;
  id: string;
  name: string;
  phone: string;
  email: string;
  bio: string;
  userImg: string;
};

const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://chatapp-backend-production-445b.up.railway.app/contacts?userId=1"
    )
      .then((res) => res.json())
      .then((data: Contact[]) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="contacts-container py-4">
      <h4>👥 Contacts</h4>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="contacts-grid">
          {contacts.map((contact) => (
            <div className="contact-card" key={contact._id}>
              <img
                src={contact.userImg}
                alt={contact.name}
                onClick={() => setSelectedImage(contact.userImg)}
                style={{ cursor: "pointer" }}
              />
              <p className="contact-name">{contact.name}</p>
              <p className="contact-phone text-muted">{contact.phone}</p>
            </div>
          ))}
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full View" />
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
