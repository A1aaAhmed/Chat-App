import { NavLink } from "react-router-dom"



const Profile = () => {
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
        <button
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
        </button>

        {/* Menu Button */}
        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
          <img
            src="./assets/Buttons/2311524.png"
            alt="Menu"
            style={{ width: 20, height: 20, filter: "brightness(0) invert(1)" }}
          />
        </button>
      </div>

      {/* Profile Section */}
      <div style={{ textAlign: "center", position: "relative", marginTop: 10 }}>
        <div
          style={{
            width: 80,
            height: 80,
            background: "linear-gradient(135deg, #ffb347, #ffcc33)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 30,
            color: "white",
            fontWeight: "bold",
            margin: "0 auto",
          }}
        >
          M
        </div>

        <div style={{ marginTop: 10, fontSize: 22 }}>Michael</div>
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
          <div style={{ fontSize: 18 }}>+201064745778</div>
          <div style={{ color: "#9fa5ad", fontSize: 14 }}>Mobile</div>
        </div>

        <div style={{ marginBottom: 15 }}>
          <div style={{ fontSize: 18 }}>@Michael</div>
          <div style={{ color: "#9fa5ad", fontSize: 14 }}>Username</div>
        </div>
      </div>
    </div>
  )
}

export default Profile