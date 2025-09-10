const Card = ({ children, className, ...others }) => {
  return (
    <div
      className={`rounded overflow-hidden shadow-lg p-5 about-card inline-block ${className}`}
      {...others}
    >
      {children}
    </div>
  );
};

export default Card;
