
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/calls.css';

const callsPage = () => {
  return (
    <div className="calls-container py-4" style={{ color: 'white', fontFamily: "'Segoe UI', sans-serif" }}>
      <h4 className="mb-4">📞 Calls</h4>

      {/* Start Calls List */}
      <div className="call-entry">
        <img src="https://ui-avatars.com/api/?name=Nawara&background=ff7f50&color=fff&rounded=true" alt="NA" />
        <div className="call-info">
          <div className="name">NA</div>
          <div className="time missed">⬇ December 4, 2023 at 9:07 AM</div>
        </div>
        <div className="call-icon">📞</div>
      </div>

      <div className="call-entry">
        <img src="https://ui-avatars.com/api/?name=Nawara&background=ff7f50&color=fff&rounded=true" alt="NA" />
        <div className="call-info">
          <div className="name">NA</div>
          <div className="time outgoing">⬆ October 19, 2023 at 12:39 PM</div>
        </div>
        <div className="call-icon">📞</div>
      </div>

      <div className="call-entry">
        <img src="https://ui-avatars.com/api/?name=Hapopa&background=dc3545&color=fff&rounded=true" alt="HA" />
        <div className="call-info">
          <div className="name">HA</div>
          <div className="time incoming">(2) ⬆ September 21, 2023 at 2:31 PM</div>
        </div>
        <div className="call-icon">📞</div>
      </div>

      <div className="call-entry">
        <img src="https://ui-avatars.com/api/?name=Nawara&background=ff7f50&color=fff&rounded=true" alt="NA" />
        <div className="call-info">
          <div className="name">NA</div>
          <div className="time outgoing">(18) ⬆ July 20, 2023 at 6:59 PM</div>
        </div>
        <div className="call-icon">📞</div>
      </div>

      <div className="call-entry">
        <img src="https://ui-avatars.com/api/?name=Nawara&background=ff7f50&color=fff&rounded=true" alt="NA" />
        <div className="call-info">
          <div className="name">NA</div>
          <div className="time missed">⬇ July 7, 2023 at 11:30 PM</div>
        </div>
        <div className="call-icon">📞</div>
      </div>

      {/* Add more entries like above if needed */}
    </div>
  );
};

export default callsPage;
