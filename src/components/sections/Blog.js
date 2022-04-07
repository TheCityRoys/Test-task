import React from "react";
import styled from "styled-components";
import { mobile } from "../../styles/breakpoints";
import { white } from "../../styles/colors";
import { icons } from "../../utils/icons";
import { Container, BlogItem, H2 } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useMediaQuery } from "react-responsive";
import { images } from "../../utils/images";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Scrollbar, EffectFade]);

const params = {
  loop: false,
  navigation: {
    nextEl: ".arrow-right2",
    prevEl: ".arrow-left2",
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  },
};

export const Blog = () => {
  const { t } = useTranslation("translations");
  const isMobile = useMediaQuery({ query: mobile });
  const blogs = [
    {
      id: "1",
      title: t("blog.blog_post_first.title"),
      text: t("blog.blog_post_first.description"),
      image: images.article1,
      category: t("labels.success_stories"),
    },
    {
      id: "2",
      title: t("blog.blog_post_second.title"),
      text: t("blog.blog_post_second.description"),
      image: images.article2,
      category: t("labels.articles"),
    },
    {
      id: "3",
      title: t("blog.blog_post_fifth.title"),
      text: t("blog.blog_post_fifth.description"),
      image: images.article3,
      category: t("labels.articles"),
    },
    {
      id: "1",
      title: t("blog.blog_post_first.title"),
      text: t("blog.blog_post_first.description"),
      image: images.article1,
      category: t("labels.success_stories"),
    },
    {
      id: "2",
      title: t("blog.blog_post_second.title"),
      text: t("blog.blog_post_second.description"),
      image: images.article2,
      category: t("labels.articles"),
    },
    {
      id: "3",
      title: t("blog.blog_post_fifth.title"),
      text: t("blog.blog_post_fifth.description"),
      image: images.article3,
      category: t("labels.articles"),
    },
  ];
  return (
    <Wrapper className="blog-swiper">
      {/*  <Container padding={isMobile ? "0" : "0 auto"}>
        <TitleWrapper>
          <H2>{t("header_titles.blog")}</H2>
          <ButtonsWrapper>
            <ButtonNavigation className="arrow-left2">
              <ButtonNavIcon src={icons.arrow_left} />
            </ButtonNavigation>
            <ButtonNavigation margin="0 0 0 1rem" className="arrow-right2">
              <ButtonNavIcon src={icons.arrow_right} />
            </ButtonNavigation>
          </ButtonsWrapper>
        </TitleWrapper>
        <SwiperWrapper>
          <Swiper {...params}>
            {blogs.map((blog_article) => (
              <SwiperSlide>
                <BlogItem
                  image={blog_article.image}
                  title={blog_article.title}
                  text={blog_article.text}
                  category={blog_article.category}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </Container>    */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 2.5rem 0 2rem;
  position: relative;

  @media ${mobile} {
    padding: 3rem 0 0rem;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0rem;
  @media ${mobile} {
    padding: 0 1.5rem;
  }
`;
const SwiperWrapper = styled.div`
  @media ${mobile} {
    padding: 2.5rem 1.5rem 3rem;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
`;
const ButtonNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20rem;
  margin: ${(props) => props.margin || "0"};
  transition: 0.2s all;
  @media ${mobile} {
    height: 48px;
    width: 48px;
  }
  &.swiper-button-disabled {
    opacity: 0.5;
  }
  &:hover {
    background: ${white};
    cursor: pointer;
    transition: 0.2s all;
  }
`;
const ButtonNavIcon = styled.img`
  height: 14px;
`;
