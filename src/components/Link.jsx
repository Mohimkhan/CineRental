const Link = ({ to = "/", className, children, ...rest }) => {
  return (
    <a className={className ? className : ""} href={to} {...rest}>
      {children}
    </a>
  );
};

export default Link;
