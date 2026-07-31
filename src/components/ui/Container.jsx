const Container = ({ as: Tag = "div", className = "", children }) => (
  <Tag className={`mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 ${className}`}>
    {children}
  </Tag>
);

export default Container;
