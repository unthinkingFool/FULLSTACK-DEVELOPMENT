function Card(props) {
  return (
    <div className="card">
      <img src={props.avatar} alt="Profile" className="avatar" />
      <h2>{props.name}</h2>
      <p className="role">{props.role}</p>
      <button>Follow</button>
    </div>
  );
}

export default Card;