// src/components/resume/ProfileSection.tsx

import headshot from "../../assets/headshot.jpg";

export default function ProfileSection() {
  return (
    <div className="profile-section">
      <h3>Kevin Barcenas-Martinez</h3>
      <p className="subtitle">Computer Science & Linguistics Student @ UT Austin</p>
      <p className="location">Austin, TX</p>
      <img className="headshot" src={headshot} alt = "Kevin Barcenas-Martinez's Headshot"></img>
    </div>
  );
}