const Card = ({ children, className = '', ...others }) => {
  // Por defecto la card será más delgada y alineada a la izquierda
  const baseClasses = 'rounded overflow-hidden shadow-lg p-5 about-card block ml-0 max-w-xs w-full';
  return (
    <div className={`${baseClasses} ${className}`} {...others}>
      {children}
    </div>
  );
};

export default Card;
