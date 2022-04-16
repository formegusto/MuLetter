import { Image } from "@chakra-ui/react";

type Props = {
  src?: string;
};
function MarkerImage({ src }: Props) {
  return <Image src={`${process.env.REACT_APP_API_SERVER}${src}`} />;
}

export default MarkerImage;
