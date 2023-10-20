import { linkColor } from "../globals";
import { Text } from "@chakra-ui/react";

const TextLinks: React.FC<{
  resource: any;
  setHomeSwitch?: any;
  setHTPSwitch?: any;
}> = ({ resource, setHomeSwitch, setHTPSwitch }) => {
  const setSetter = (resource: { enum: string }) => {
    if (setHomeSwitch !== undefined) {
      setHomeSwitch(resource.enum);
    }
    if (setHTPSwitch !== undefined) {
      setHTPSwitch(resource.enum);
    }
  };

  return (
    <Text
      mb="10px"
      _hover={{ cursor: "pointer", color: linkColor }}
      onClick={() => setSetter(resource)}
    >
      {resource.enum}
    </Text>
  );
};

export default TextLinks;
