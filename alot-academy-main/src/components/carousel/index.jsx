"use client";

import styled, { keyframes, css } from "styled-components";
import Image from "next/image";

const AppContainer = styled.div`
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(2rem, 1rem + 30vmin, 30rem) / 10);
`;

function Carousel({ icons }) {
  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {icons.map((icon, index) => (
              <ImageGroup key={index}>
                <Image
                  src={icon}
                  alt="icons"
                  objectFit="contain"
                  width={100}
                  height={100}
                  /* border: 1px solid black; */
                  /* borderRadius= "0.5rem"  */
                  aspectRatio="16/9"
                  padding="5px 10px"
                />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {icons.map((icon, index) => (
              <ImageGroup key={index}>
                <Image
                  src={icon}
                  alt="icons"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  /* border: 1px solid black; */
                  /* borderRadius= "0.5rem"  */
                  aspectRatio="16/9"
                  padding="5px 10px"
                />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Carousel;
