// src/components/resume/ProfileSection.tsx
import headshot from "../../assets/headshot.jpg";

export default function ProfileSection() {
  return (
    <div className="profile-section">
      <div className="profile-content">
        <img className="headshot" src={headshot} alt="Kevin Barcenas-Martinez's Headshot" />
        <div className="profile-text">
          <h3 className="name">Kevin Barcenas-Martinez</h3>
          <p className="subtitle">Computer Science & Linguistics Student @ UT Austin</p>
          <p className="location">Based in Austin, Texas</p>
        </div>
      </div>
    </div>
  );
}