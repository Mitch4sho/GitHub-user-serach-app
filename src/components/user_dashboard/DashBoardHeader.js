export default function DashBoardHeader() {
  return (
    <header className="header-info">
      <img
        src={user.avatar_url}
        alt="ProfilePhoto"
        className="user-profile-pic"
      />
      <p className="name">{user.name}</p>
      <p className="username">
        <a href={user.html_url}>@{user.login}</a>
      </p>
      <p className="join-date">{`Joined ${joinDate[2]} ${joinDate[1]} ${joinDate[0]}`}</p>
      <p className="profile-bio">{user.bio}</p>
    </header>
  );
}
