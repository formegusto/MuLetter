import { Box, Flex } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import styled, { css, keyframes } from "styled-components";
import assets from "../assets";
import { Mail, MailBox } from "../store/mailbox/types";

type LetterProps = {
  mailBox: MailBox | null;
  mail: Mail | null;
};

const LazyMarkerImage = lazy(() => import("./MailBox/MarkerImage"));

function Letter({ mailBox, mail }: LetterProps) {
  const [markerStart, setMarkerStart] = React.useState<boolean>(false);

  // 시작점
  React.useEffect(() => {
    setTimeout(() => {
      setMarkerStart(true);
    }, 1000);
  }, []);

  return (
    <LetterBlock>
      <LetterBack />

      <LetterPaper className="letter-paper" />

      <LetterFront className="letter-front">
        <img src={assets.Item.LetterFrontx3} alt="Letter Front" />
      </LetterFront>

      <LetterLid className="letter-lid">
        <img src={assets.Item.LetterLidReversex3} alt="Letter Lid" />
      </LetterLid>

      <Suspense fallback={<></>}>
        <ImageMarker markerStart={markerStart}>
          <LazyMarkerImage src={mailBox?.imagePath} />
          <Box />
        </ImageMarker>
      </Suspense>
    </LetterBlock>
  );
}

const AniImageMarker = keyframes`
  0% {
    transform: translate(0);
    opacity: 1;
  } 100% {
    transform: translateZ(2px) translateX(6px) translateY(-45px) rotateY(45deg);
    opacity: 0;
  }
`;

const ImageMarker = styled(Box)<{ markerStart: boolean }>`
  position: absolute;
  top: calc(493.33px / 2 - 56px) !important;
  left: calc(740px / 2 - 32px) !important;
  transform-origin: 50% 50%;
  ${(props) =>
    props.markerStart &&
    css`
      animation: ${AniImageMarker} 1.25s linear forwards;
    `}

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 100%;
    border: 2px solid #999;
    border: none;
  }

  & > img {
  }

  & > div {
    background-color: rgba(55, 55, 55, 0.7);
  }
`;

const LetterBlock = styled.div`
  position: relative;
  width: 740px;
  height: 493.33px;

  & > div {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border-end-start-radius: 16px;
    border-end-end-radius: 16px;
  }
`;

const LetterLid = styled.div`
  height: calc(493.33px / 2) !important;

  /* transform: rotateX(180deg); */
  transform-origin: 0% 0%;

  /* z-index: 1; */

  & > img {
    filter: drop-shadow(0px 2px 1px rgba(55, 55, 55, 0.5));
  }
`;

const LetterFront = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  perspective: 500px;

  /* z-index: 3; */

  & > img {
    filter: drop-shadow(-2px -2px 1px rgba(55, 55, 55, 0.5));
  }
`;

const LetterPaper = styled.div`
  left: 10px !important;
  width: 720px !important;
  background-color: #fff;

  /* transform: translateY(-145px); */

  border-radius: 16px !important;
  /* z-index: 2; */

  box-shadow: 0px 0px 4px rgba(55, 55, 55, 0.5);
`;

const LetterBack = styled.div`
  background-color: #eee;
`;

type Props = {
  id?: string;
  mailBox: MailBox | null;
  mail: Mail | null;
};

function MailBoxComponent({ id, mailBox, mail }: Props) {
  return (
    <>
      {/* <ContentTitle>{id}</ContentTitle> */}
      <Flex
        height="calc(100vh - 120px)"
        justifyContent="center"
        alignItems="center"
      >
        <Letter mail={mail} mailBox={mailBox} />
      </Flex>
    </>
  );
}

export default MailBoxComponent;
