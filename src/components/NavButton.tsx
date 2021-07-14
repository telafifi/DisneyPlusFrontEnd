import styled from 'styled-components';

interface NavButtonProps {
  href: string;
  src: string;
  label: string;
}

const NavButton = (props: NavButtonProps) => {
  return (
    <Link href={props.href}>
      <img src={props.src} alt={props.label} />
      <span>{props.label}</span>
    </Link>
  )
}

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 0 12px;

  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }

  span {
    color: rgb(249,249,249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;

    &:before {
      background-color: rgb(249,249,249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: '';
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    span: before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;

export default NavButton;