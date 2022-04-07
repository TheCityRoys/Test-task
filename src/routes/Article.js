import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Container, Button, H1, Paragraph } from "../components";
import { border } from "../styles/colors";
import { icons } from "../utils/icons";
import { images } from "../utils/images";
import { useHistory } from "react-router-dom";

export const Article = () => {
  const handleClick = () => {
    push("/");
  };
  const { push } = useHistory();
  return (
    <>
      <Helmet>
        <title>EasyPanda</title>
      </Helmet>

      <Wrapper>
        <Container>
          <InnerHeader>
            <Button
              icon={icons.back_button_arrow}
              label="Back"
              className="grey"
              onClick={handleClick}
            />
          </InnerHeader>
          <ImageWrapper>
            <Image src={images.article1_big} />
          </ImageWrapper>
          <Content>
            <Title>
              <H1>Moving services are now available in Riga</H1>
            </Title>
            <Paragraph>
              Moving is a complex and time consuming process that requires a lot
              of effort, energy and can be stressful. Partly in cooperation with
              our partners will offer you the most convenient and modern moving
              service in Riga. Our moving service will give you more free time
              for other matters related to moving, but most importantly, will
              facilitate the process itself. Our partners are experienced,
              correct and polite. We will help you to move completely without
              stress, so you could feel calm. Our moving service partners have
              more than 10 years of experience in this field of work, therefore
              they already know the to-do list from A to Z and have a procedure
              in place that will give you the most convenient moving experience.
              Your belongings will be accurately packed, carefully transported
              and brought to the new place. After the work is done, everything
              will be clean and tidy. Be sure to try the most convenient and
              safest moving service in Riga, it will make your life much easier.
            </Paragraph>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${border};
  padding: 0 0 4rem;
`;
const InnerHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0;
`;
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0 2rem;
`;
