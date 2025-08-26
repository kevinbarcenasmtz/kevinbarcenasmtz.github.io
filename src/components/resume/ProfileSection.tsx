// src/components/resume/ProfileSection.tsx
import headshot from "../../assets/headshot.jpg";
import { aboutMeContent } from "../../data/portfolio";

export default function ProfileSection() {
  return (
    <div className="profile-section">
      <div className="profile-content">
        <img
          className="headshot"
          src={headshot}
          alt="Kevin Barcenas-Martinez's Headshot"
        />
        <div className="profile-text">
          <div className="profile-header">
            <h3 className="name">Kevin Barcenas-Martinez</h3>
            <p className="location">Based in Austin, Texas</p>
          </div>
          <div className="profile-paragraphs">
            {aboutMeContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
