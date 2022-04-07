import React from "react";
import styled from "styled-components";
import { white } from "../../styles/colors";
import { icons } from "../../utils/icons";
import { mobile, tablet } from "../../styles/breakpoints";
import { Container, ServiceCard, H2 } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { services } from "../../api/mock/services";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
SwiperCore.use([Navigation, Scrollbar, EffectFade]);

const params = {
  loop: false,
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1023: {
      slidesPerView: 5.8,
      spaceBetween: 16,
    },
    1680: {
      slidesPerView: 5.8,
      spaceBetween: 16,
    },
    2560: {
      slidesPerView: 5.8,
      spaceBetween: 16,
    },
  },
};

export const Services = () => {
  const { t } = useTranslation("translations");
  const services_list = [
    { title: t("services_list.cleaning"), icon: services[0].icon },
    { title: t("services_list.furniture_assembly"), icon: services[1].icon },
    { title: t("services_list.window_repair"), icon: services[2].icon },
    { title: t("services_list.plumbing"), icon: services[3].icon },
    { title: t("services_list.ventilation_conditioning"), icon: services[4].icon },
    { title: t("services_list.electricity"), icon: services[5].icon },
    { title: t("services_list.household_appliances"), icon: services[6].icon },
  ];
  const isMobile = useMediaQuery({ query: mobile });
  return (
    <Wrapper className="services-swiper">
      <Container>
        <TitleWrapper>
          <H2>{t("header_titles.services")}</H2>
          <ButtonsWrapper>
            <ButtonNavigation className="arrow-left">
              <ButtonNavIcon src={icons.arrow_left} />
            </ButtonNavigation>
            <ButtonNavigation
              margin={isMobile ? "0 0 0 0.75rem" : "0 0 0 1rem"}
              className="arrow-right"
            >
              <ButtonNavIcon src={icons.arrow_right} />
            </ButtonNavigation>
          </ButtonsWrapper>
        </TitleWrapper>
      </Container>
      <InnerWrapper>
        <Swiper {...params}>
          {services_list.map((service, index) => (
            <SwiperSlide>
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0 0;
  position: relative;
  @media ${tablet} {
    padding: 0 1.5rem;
  }

`;
const InnerWrapper = styled.div`
  width: 100%;
  position: relative;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0rem;
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
