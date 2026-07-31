const Container = ({ as: Tag = "div", className = "", children }) => (
  <Tag className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>
    {children}
  </Tag>
);

export default Container;
