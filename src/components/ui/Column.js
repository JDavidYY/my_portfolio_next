const Column = ({ children, side }) => {
  let className = 'column';
  if (side === 'left') className += ' column-left';
  if (side === 'right') className += ' column-right';
  if (side === 'half') className += ' column-half';
  return <div className={className}>{children}</div>;
};

export default Column;
