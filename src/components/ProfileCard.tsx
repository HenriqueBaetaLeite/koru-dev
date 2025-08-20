import "./ProfileCard.css";

function ProfileCard({ name, title, imageUrl, children }) {
  return (
    <div className="profile-card">
      <p className="profile-name">Nome: {name}</p>
      <p className="profile-title">{title}</p>
      <img className="profile-image" src={imageUrl} alt={name} width="80px" />
      {children}
    </div>
  );
}

export default ProfileCard;
