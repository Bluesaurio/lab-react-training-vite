function CreditCard(props) {
  const cardStyles = {
    heigth: "100px",
    width: "200px",
  };
  function cardNumber(cc) {
    if (cc.length <= 4) {
      return cc;
    }

    let maskedString = "";
    for (let i = 0; i < cc.length; i++) {
      if (i <= cc.length - 5) {
        maskedString += "#";
      } else {
        maskedString += cc[i];
      }
    }

    return maskedString;
  }
  return (
    <div styles={cardStyles}>
      <h5>{props.type}</h5>
      <h5>cardNumber({props.number})</h5>
    </div>
  );
}
export default CreditCard;
