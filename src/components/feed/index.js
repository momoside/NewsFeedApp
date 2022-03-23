const FeedComponent = ({ title, date, description, source, image }) => {
  return (
    <div className="feeds__wrapper">
      <div className="feeds__content">
        <h3>{title}</h3>
        <div className="feeds__date">{date}</div>
        <p>{description}</p>
        <div className="feeds__source">source: {source}</div>
        <div className="feeds__action">
          <button className="btn btn--blue">like</button>
          <button className="btn btn--red">share</button>
        </div>
      </div>
      <div className="feeds__image">
        <img src={image} width={300} height={200} alt="pic" />
      </div>
    </div>
  );
};

export default FeedComponent;
