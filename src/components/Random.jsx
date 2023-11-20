function Random(props) {
  return (
    Math.floor(Math.random() * props.min), Math.floor(Math.random() * props.max)
  );
}
export default Random;
