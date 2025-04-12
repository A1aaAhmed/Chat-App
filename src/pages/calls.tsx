/*using javascri*/
/*import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/calls.css';

const CallsPage = () => {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://chatapp-backend-production-445b.up.railway.app/calls/1')
      .then(res => res.json())
      .then(data => {
        setCalls(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching calls:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="calls-container py-4" style={{  margin: '0 auto', color: '#333', fontFamily: "'Segoe UI', sans-serif" }}>
      <h4 className="mb-4 ">📞 Calls</h4>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        calls.map((call) => (
          <div className="call-entry d-flex align-items-center mb-3 p-2 shadow-sm rounded" key={call._id} style={{ backgroundColor: '#f9f9f9' }}>
            <img
              src={call.otherPartyInfo.userImg}
              alt={call.otherPartyInfo.name}
              className="rounded-circle me-3"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <div className="flex-grow-1">
              <div className="fw-bold">{call.otherPartyInfo.name}</div>
              <div className="text-muted">{new Date(call.timestamp).toLocaleString()}</div>
            </div>
            <div className="call-icon fs-4">📞</div>
          </div>
        ))
      )}
    </div>
  );
};

export default CallsPage;*/

/*using typescri*/
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/calls.css';

interface UserInfo {
  userImg: string;
  name: string;
}

interface Call {
  _id: string;
  otherPartyInfo: UserInfo;
  timestamp: string;
}

const CallsPage: React.FC = () => {
  const [calls, setCalls] = useState<Call[]>([]); // Explicitly defining the state type as an array of 'Call' objects
  const [loading, setLoading] = useState<boolean>(true); // Explicitly defining the loading state as a boolean

  useEffect(() => {
    fetch('https://chatapp-backend-production-445b.up.railway.app/calls/1')
      .then(res => res.json())
      .then((data: Call[]) => {
        setCalls(data);  // Data is an array of 'Call' objects
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching calls:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="calls-container py-4" style={{ margin: '0 auto', color: '#333', fontFamily: "'Segoe UI', sans-serif" }}>
      <h4 className="mb-4 ">📞 Calls</h4>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        calls.map((call) => (
          <div className="call-entry d-flex align-items-center mb-3 p-2 shadow-sm rounded" key={call._id} style={{ backgroundColor: '#f9f9f9' }}>
            <img
              src={call.otherPartyInfo.userImg}
              alt={call.otherPartyInfo.name}
              className="rounded-circle me-3"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <div className="flex-grow-1">
              <div className="fw-bold">{call.otherPartyInfo.name}</div>
              <div className="text-muted">{new Date(call.timestamp).toLocaleString()}</div>
            </div>
            <div className="call-icon fs-4">📞</div>
          </div>
        ))
      )}
    </div>
  );
};

export default CallsPage;

