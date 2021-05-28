import Link from "next/link";
import styled from "styled-components";

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-size: 1.3rem;
  color: white;
  margin-right: 1rem;
  font-weight: bold;
  &:hover {
    color: #606c88;
  }
`;
