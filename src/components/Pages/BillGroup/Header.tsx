import { Heading, Text } from "@chakra-ui/react";

interface Props {
  header?: string;
  text?: string;
}

function Header({
  header = "Create Bill Group",
  text = "Lorem ipsum, some text is provided by the owner. and can be use to another language.",
}: Props) {
  return (
    <div>
      <Heading fontSize="2xl" mb={2}>
        {header}
      </Heading>
      <Text>{text}</Text>
    </div>
  );
}

export default Header;
