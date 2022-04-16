import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Track } from "../../store/mailbox/types";

type ItemProps = {
  track: Track;
};
function TrackItem({ track }: ItemProps) {
  return (
    <Flex color="#333">
      <Image src={track.image} width="100px" height="100px" objectFit="cover" />
      <Flex flex={1}>
        <Text>{track.trackName}</Text>
      </Flex>
      <Box></Box>
    </Flex>
  );
}

type Props = {
  tracks: Track[];
};

function Tracks({ tracks }: Props) {
  return (
    <Flex padding="32px 16px 0" direction="column" gap="16px">
      {tracks.map((track) => (
        <TrackItem key={track.trackId} track={track} />
      ))}
    </Flex>
  );
}

export default Tracks;
