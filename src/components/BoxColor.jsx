function BoxColor(props) {
  const boxStyles = {
    backgroundColor: `r=${props.r} g=${props.g} b=${props.b}`,
    padding: "40px",
    height: "100px",
    width: "200px",
  };
  return <div styles={boxStyles}></div>;
}
export default BoxColor;
