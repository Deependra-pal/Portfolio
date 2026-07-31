import Container from "./Container";

// A page section wrapper. `data-animate` marks it as an entrance-animation
// target so GSAP can be wired in later without touching the markup.
const Section = ({
  id,
  as: Tag = "section",
  className = "",
  containerClassName = "",
  animate = true,
  children,
}) => (
  <Tag
    id={id}
    data-animate={animate ? "section" : undefined}
    className={`relative py-20 sm:py-24 lg:py-28 ${className}`}
  >
    <Container className={containerClassName}>{children}</Container>
  </Tag>
);

export default Section;
