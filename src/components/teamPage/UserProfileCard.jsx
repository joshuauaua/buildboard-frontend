import "./UserProfileCard.css";
import picture from "../../assets/user1.png";

export default function UserProfileCard({ user }) {
  const defaultUser = {
    name: "John Doe",
    username: "johndoe",
    email: "john@doe.com",
    role: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Stockholm",
  };

  user = defaultUser;

  return (
    <div className="user-profile-card">
      <div className="gradiant"></div>

      <div className="profile-body">
        <img
          src={picture}
          alt={`${user.name}'s profile`}
          className="profile-picture"
        />
        <h2 className="user-name">{user.name}</h2>

        <div className="profile-top">
          <p className="user-role">{user.role}</p>
          <p className="user-location">  
          {user.location}</p>
        </div>

        <div className="profile-bottom">
          <p className="user-description">{user.description}</p>
          <button className="messsage-button">Message</button>
        </div>
      </div>
    </div>
  );
}
