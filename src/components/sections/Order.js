import React, {useState} from "react";
import styled from "styled-components";
import { mobile } from "../../styles/breakpoints";
import { Container, SectionText, StepCard } from "../../components";
import { images } from "../../utils/images";
import { useMediaQuery } from "react-responsive";
import {useTranslation} from "react-i18next";
import { icons } from "../../utils/icons";

export const Order = () => {
  const { t } = useTranslation("translations");
  const isMobile = useMediaQuery({ query: mobile });

  const mockImages = [
    images.orderMock0,
    images.orderMock1,
    images.orderMock2,
    images.orderMock3,
    images.orderMock4,
    images.orderMock5
  ];

  const bookingSteps = [
    {index:1, id:"1.", title: t('order_list.booking_service.title'), text: t('order_list.booking_service.description'), icon: icons.booking_step1},
    {index:2, id:"2.", title: t('order_list.know_the_price.title'), text: t('order_list.know_the_price.description'), icon: icons.booking_step2},
    {index:3, id:"3.", title: t('order_list.pick_a_service_provider.title'), text: t('order_list.pick_a_service_provider.description'), icon: icons.booking_step3},
    {index:4, id:"4.", title: t('order_list.play_securely.title'), text: t('order_list.play_securely.description'), icon: icons.booking_step4},
    {index:5, id:"5.", title: t('order_list.recieve_rate_service.title'), text: t('order_list.recieve_rate_service.description'), icon: icons.booking_step5}
  ];
  const [selectedMockPhone, setSelectedMockPhone] = useState(mockImages[0]);
  const SwitchImages = (index) => {
    setSelectedMockPhone(mockImages[index]);
  }
  return (
    <Wrapper>
      <Container>
        <SectionText
          subLabel={t('header_spans.order')}
          title={t('header_titles.order')}
          className="center"
          maxWidth="576px"
          text={t('header_paragraphs.order')}
        />
        <Flex>
          {isMobile ? null : (
            <Phone>
              <Image src={selectedMockPhone} onClick={() => setSelectedMockPhone(mockImages[0])} />
            </Phone>
          )}

          <Steps>
            {bookingSteps.map((booking_step) => (
              <StepCard
                index={booking_step.index}
                icon={booking_step.icon}
                title={booking_step.id + booking_step.title}
                text={booking_step.text}
                key={booking_step.id}
                onHover={(index) => SwitchImages(index)}
              />
            ))}
          </Steps>
        </Flex>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 19.375rem 0 0;
  background: linear-gradient(180deg, #ffedd1 0%, rgba(255, 255, 255, 0) 100%);
  @media ${mobile} {
    padding: 34rem 0 0;
    background: linear-gradient(180deg, #ffedd1 0%, rgba(255, 255, 255, 0) 15%);
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0;
  @media ${mobile} {
    flex-direction: column-reverse;
    margin: 2rem 0 0;
  }
`;
const Phone = styled.div`
  display: flex;
  width: 30%;
  @media ${mobile} {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
const Steps = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  padding-left: 5.25rem;
  @media ${mobile} {
    width: 100%;
    padding: 0;
    flex-wrap: initial;
    flex-direction: column;
  }
`;
