function IdCard(props) {
  return (
    <div>
      <h5>First name: {props.firstName}</h5>
      <h5>Last name: {props.lastName}</h5>
      <h5>Gender: {props.gender}</h5>
      <h5>Height: {props.height}</h5>
      <h5>Birth:{props.birth}</h5>
      <img src={props.picture} alt={props.firstName} />
    </div>
  );
}
export default IdCard;
