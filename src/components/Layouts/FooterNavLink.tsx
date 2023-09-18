import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { Icon } from "@phosphor-icons/react";

interface Props {
  to: string;
  icon: React.ReactElement<Icon>;
}

function FooterNavLink({ to, icon }: Props) {
  const linkStyles = {
    color: "gray.700",
    borderTop: "2px",
    borderColor: "white",
    paddingX: "20px",
    paddingY: "14px",
    _hover: { color: "yellow.400", borderTop: "2px" },
  };

  return (
    <Link
      as={NavLink}
      to={to}
      _activeLink={{
        color: "yellow.400",
        borderTop: "2px",
      }}
      {...linkStyles}
    >
      {icon}
    </Link>
  );
}

export default FooterNavLink;
