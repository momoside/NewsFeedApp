const CategoryComponent = ({ category, children, isHighlighted }) => {
  return (
    <div className={`feeds__groups ${isHighlighted && "highlight"}`}>
      <div className="feeds__category">{category}</div>
      {children}
    </div>
  );
};

export default CategoryComponent;
