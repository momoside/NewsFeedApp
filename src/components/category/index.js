const CategoryComponent = ({ category, children }) => {
  return (
    <div className="feeds__groups">
      <div className="feeds__category">{category}</div>
      {children}
    </div>
  );
};

export default CategoryComponent;
