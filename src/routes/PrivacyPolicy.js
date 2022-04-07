import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Container, H5, Paragraph, H2 } from "../components";
import { grey, primary } from "../styles/colors";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>EasyPanda Privacy Policy</title>
      </Helmet>

      <Wrapper>
        <Container>
          <PageTitle>
            <H2>Privacy Policy</H2>
          </PageTitle>
          <StyledTabs>
            <StyledTabList>
              <StyledTab>Customer</StyledTab>
              <StyledTab>Service Provider</StyledTab>
            </StyledTabList>

            <StyledTabPanel>
              <Content>
                <ContentText>
                  <ContentBlock>
                    <Heading>
                      <H5>What is Partly</H5>
                    </Heading>
                    <Paragraph>
                      Partly is a mobile platform that helps people to solve
                      their on-demand household tasks by connecting them to
                      trusted service providers.
                      <br />
                      <br />
                      Download the app and give Partly a chance to make your
                      life better.
                    </Paragraph>
                  </ContentBlock>
                  <ContentBlock>
                    <Heading>
                      <H5>What tasks can be done with Partly?</H5>
                    </Heading>
                    <Paragraph>
                      From simple to complicated tasks, currently Partly can
                      help you with handyman, electrical, plumbing, furniture
                      assembly, cleaning and repair tasks.
                      <br />
                      <br />
                      New categories will be released later on, so use our app
                      and follow our news.
                    </Paragraph>
                  </ContentBlock>
                  <ContentBlock>
                    <Heading>
                      <H5>Who is a Service provider?</H5>
                    </Heading>
                    <Paragraph>
                      A Service provider can be a legal or natural person who
                      provide services (does the task) for other people within
                      the Partly community.
                      <br />
                      <br />
                      If you want to be a Service provider, simply create an
                      account, open Profile menu, click on “Become a Service
                      provider”, fill all the necessary information, attend live
                      training session and start browsing through tasks of your
                      interests. Keep in mind that you'll need to be over 16 and
                      have local working rights to be a Service provider.
                      <br />
                      <br />
                      Once you have attended live training session you will be
                      able to apply for available tasks. You will be able to
                      contact Customers and discuss further details straight
                      after applying for the task of your interests.
                    </Paragraph>
                  </ContentBlock>
                  <ContentBlock>
                    <Heading>
                      <H5>Who is a Customer?</H5>
                    </Heading>
                    <Paragraph>
                      A Customer is a person who publish/post a task in the
                      Partly app to find a respective Service provider who can
                      do this task. The Customer may be a natural or legal
                      person.{" "}
                    </Paragraph>
                  </ContentBlock>
                  <ContentBlock>
                    <Heading>
                      <H5>Is Partly available in my city?</H5>
                    </Heading>
                    <Paragraph>
                      Partly is currently only available in Riga (Latvia) and
                      closest cities.
                      <br />
                      <br />
                      If we decide to expand further there will be a public
                      announcement. Check out our website or follow us on social
                      media to know the latest Partly news.
                    </Paragraph>
                  </ContentBlock>
                </ContentText>
                <ContentMenu>
                  <List>
                    <ListItem className="active">What is Partly?</ListItem>
                    <ListItem>What tasks can be done with Partly?</ListItem>
                    <ListItem>Who is a Service provider?</ListItem>
                    <ListItem>Who is a Customer?</ListItem>
                    <ListItem>Is Partly available in my city?</ListItem>
                  </List>
                </ContentMenu>
              </Content>
            </StyledTabPanel>
            <StyledTabPanel>
              <h2>Any content 2</h2>
            </StyledTabPanel>
          </StyledTabs>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 2.5rem 0 4rem;
`;
const StyledTabs = styled(Tabs)`
  -webkit-tap-highlight-color: transparent;
  width: 100%;
`;
const StyledTabList = styled(TabList)`
  display: flex;
  margin: 0;
  list-style: none;
  padding: 0;
`;
const StyledTab = styled(Tab)`
  font-size: 16px;
  line-height: 24px;
  color: ${grey};
  font-weight: 500;
  padding: 0 16px 8px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${grey};
  }
  &.react-tabs__tab--selected {
    color: ${primary};
    font-weight: 600;
    &:after {
      background: ${primary};
      height: 2px;
    }
  }
`;
const StyledTabPanel = styled(TabPanel)`
  position: relative;
`;
const PageTitle = styled.div`
  margin: 0 0 2.5rem;
`;
const Heading = styled.div`
  margin: 0 0 32px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 2.5rem 0 0;
  border-bottom: 1px solid ${grey};
  padding: 0 0 2rem;
`;
const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px;
`;
const ContentText = styled.div`
  position: relative;
`;
const ContentMenu = styled.div`
  position: relative;
  width: 100%;
  padding-left: 108px;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.div`
  display: flex;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 1rem;
  font-weight: 500;
  position: relative;
  transition: 0.2s all;
  &:hover {
    color: ${primary};
    transition: 0.2s all;
    cursor: pointer;
  }
  &.active {
    font-weight: 600;
    color: ${primary};

    &:after {
      content: "";
      width: 2px;
      height: 100%;
      position: absolute;
      left: -8px;
      background: ${primary};
    }
  }
`;
