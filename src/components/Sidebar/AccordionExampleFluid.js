import React, { Component } from 'react'
import styled from 'styled-components';
import { Accordion, Icon } from 'semantic-ui-react'
import { Input, Label, Menu, Item } from 'semantic-ui-react'

const OverrideAccordian = styled(Accordion)`
  
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start; 
  flex-direction: row;
  align-items: flex-start; 
  align-content: flex-start;
`;

const Title = styled.div`
  flex: 1 0 auto;
`
const TitleDropDownIcon = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: flex-start; 
  align-content: flex-start;
`
const TitleIcon = styled.div`
  display: flex;
  flex: 0 0 20px;
  padding: 0px 10px 0px 0px;
  justify-content: flex-start;
  align-items: flex-start; 
  align-content: flex-start;
`

const OverrideAccordianTitle = styled(Accordion.Title)`
  &:hover {
    background-color: red !important;
  }
`;

const OverrideItemDescription = styled(Item.Description)`
  &:hover {
    background-color: red !important;
  }
`;

const OverrideItem = styled(Item)`
  padding: .75em 1em !important;
  &:hover {
    background-color: red !important;
  }
`;

const OverrideAccordionContent = styled(Accordion.Content)`
  padding: 0px 0px 0px 0px !important;
`;

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <OverrideAccordian styled>
        <OverrideAccordianTitle active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <TitleWrapper>
            <TitleIcon>
              <Icon name='search' />
            </TitleIcon>
            <Title>
              Main Level
            </Title>
            <TitleDropDownIcon>
              <Icon name='dropdown' />
            </TitleDropDownIcon>
          </TitleWrapper>
        </OverrideAccordianTitle>
        <OverrideAccordionContent active={activeIndex === 0}>
          <OverrideItem>
            <OverrideItemDescription>
              <TitleWrapper>
                <TitleIcon>
                  <Icon name='search' />
                </TitleIcon>
                <Title>
                  Item 1
                </Title>
              </TitleWrapper>
            </OverrideItemDescription>
          </OverrideItem>
            <OverrideItem>
              <Item.Description>
                <TitleWrapper>
                  <TitleIcon>
                    <Icon name='search' />
                  </TitleIcon>
                  <Title>
                    Item 1
                  </Title>
                </TitleWrapper>
              </Item.Description>
            </OverrideItem>
        </OverrideAccordionContent>




        <OverrideAccordianTitle active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <TitleWrapper>
            <TitleIcon>
              <Icon name='search' />
            </TitleIcon>
            <Title>
              Main Level
            </Title>
            <TitleDropDownIcon>
              <Icon name='dropdown' />
            </TitleDropDownIcon>
          </TitleWrapper>
        </OverrideAccordianTitle>
        <OverrideAccordionContent active={activeIndex === 1}>
          <OverrideItem>
            <OverrideItemDescription>
              <TitleWrapper>
                <TitleIcon>
                  <Icon name='search' />
                </TitleIcon>
                <Title>
                  Item 1
                </Title>
              </TitleWrapper>
            </OverrideItemDescription>
          </OverrideItem>
          <OverrideItem>
            <Item.Description>
              <TitleWrapper>
                <TitleIcon>
                  <Icon name='search' />
                </TitleIcon>
                <Title>
                  Item 1
                </Title>
              </TitleWrapper>
            </Item.Description>
          </OverrideItem>
        </OverrideAccordionContent>
      </OverrideAccordian>
    )
  }
}