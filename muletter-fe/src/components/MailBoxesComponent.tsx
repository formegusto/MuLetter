import {
  AspectRatio,
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { ContainerMar16 } from "./common/Container";
import { ContentTitle } from "./common/PageTitle";
import assets from "../assets";

function MailBoxIcon() {
  return (
    <Flex alignItems="center">
      <Image src={assets["Icon"]["Mailx3"]} width="24px" height="24px" />
      <Text margin="0 0 0 8px" fontSize={12} fontWeight="bold">
        2
      </Text>
    </Flex>
  );
}

function MailBoxTracks() {
  return (
    <Box>
      <AvatarGroup
        size="xs"
        max={4}
        sx={{
          "& > .chakra-avatar__excess": {
            fontSize: "8px",
            fontWeight: "bold",
            background: "transparent",
            border: "2px solid #fff",
          },
        }}
      >
        <Avatar size="xs" />
        <Avatar size="xs" />
        <Avatar size="xs" />
        <Avatar size="xs" />
        <Avatar size="xs" />
        <Avatar size="xs" />
      </AvatarGroup>
    </Box>
  );
}

function MailBox() {
  return (
    <AspectRatio
      width="calc(100% / 4 - 24px)"
      ratio={4 / 3}
      border="1px solid #fff"
      padding="16px"
      boxSizing="border-box"
      color="white"
    >
      <Flex
        direction="column"
        margin="16px 0 16px"
        justifyContent="flex-start !important"
      >
        <AspectRatio width="calc(100% - 32px)" ratio={4 / 2.25}>
          <>
            <Image alt="이미지" />
            <Box background="rgba(51, 51, 51, 0.3)" />
            <Text fontSize="14px" fontWeight="semibold">
              잔잔한 나의 우체통
            </Text>
          </>
        </AspectRatio>
        <Flex
          margin="-16px 0 0"
          padding="0 8px"
          width="calc(100% - 32px)"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flex={1}
        >
          <MailBoxIcon />
          <MailBoxTracks />
        </Flex>
      </Flex>
    </AspectRatio>
  );
}

function MailBoxesComponent() {
  return (
    <ContainerMar16>
      <ContentTitle>나의 우체통</ContentTitle>
      <Flex margin="32px 0 0" gap="32px" flexWrap="wrap">
        {Array.from({ length: 16 }).map((val, idx) => (
          <MailBox />
        ))}
      </Flex>
    </ContainerMar16>
  );
}

export default MailBoxesComponent;
