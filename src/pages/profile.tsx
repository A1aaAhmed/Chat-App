

import { NavLink } from "react-router-dom"
import { useState, useEffect, use } from "react";
import { userId } from "../shared/constants";

const Profile = () => {
  const [loading, setLoading] = useState(true);
    interface User {
      name: string;
      phone: string;
      userImg?: string;
      bio?: string;
      email?: string
      // any other fields
    }
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      fetch(`https://chatapp-backend-production-445b.up.railway.app/userProfile/${userId}`)
        .then(res => res.json())
        .then(data => {
          setUser(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching user:', error);
          setLoading(false);
        });
    }, []);
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#17212b",
        color: "white",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: 15 }}>
        {/* Back Arrow Button */}

        <NavLink to="/">
        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
          <img
            src="./assets/Buttons/271220.png"
            alt="Back"
            style={{ width: 24, height: 24, filter: "brightness(0) invert(1)" }}
          />
        </button>
        </NavLink>

        <div style={{ flex: 1 }} />

        {/* Edit Button */}
        {/* <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginRight: 15,
          }}
        >
          <img
            src="./assets/Buttons/1827933.png"
            alt="Edit"
            style={{ width: 20, height: 20, filter: "brightness(0) invert(1)" }}
          />
        </button> */}

        {/* Menu Button */}
        {/* <button style={{ background: "none", border: "none", cursor: "pointer" }}>
          <img
            src="./assets/Buttons/2311524.png"
            alt="Menu"
            style={{ width: 20, height: 20, filter: "brightness(0) invert(1)" }}
          />
        </button> */}
      </div>

      {/* Profile Section */}
      <div style={{ textAlign: "center", position: "relative", marginTop: 10 }}>
      <img src={user?.userImg} className="rounded-circle" width="100" height={100} alt="" />

        <div style={{ marginTop: 10, fontSize: 22 }}>{user?.name}</div>
        <div style={{ color: "#9fa5ad", fontSize: 14 }}>online</div>
      </div>

      {/* Info Box */}
      <div
        style={{
          margin: "30px 20px 60px",
          padding: 20,
          backgroundColor: "#1c2a36",
          borderRadius: 10,
        }}
      >
        <div style={{ color: "#63aee0", marginBottom: 10 }}>Info</div>

        <div style={{ marginBottom: 15 }}>
          <div style={{ fontSize: 18 }}>{user?.phone}</div>
          <div style={{ color: "#9fa5ad", fontSize: 14 }}>Mobile</div>
        </div>

        <div style={{ marginBottom: 15 }}>
          <div style={{ fontSize: 18 }}>@{user?.name}</div>
          <div style={{ color: "#9fa5ad", fontSize: 14 }}>Username</div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <div style={{ fontSize: 18 }}>{user?.email}</div>
          <div style={{ color: "#9fa5ad", fontSize: 14 }}>Email</div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <div style={{ fontSize: 18 }}>{user?.bio}</div>
          <div style={{ color: "#9fa5ad", fontSize: 14 }}>Bio</div>
        </div>
      </div>
    </div>
  )
}


export default Profile