function Description(props) {
  return (
    <div className="description">
      <div className="descriptionTitle descriptionContent">{props.title}</div>
      <div className="descriptionText descriptionContent">
        {props.description}
      </div>
    </div>
  );
}

export default Description;
