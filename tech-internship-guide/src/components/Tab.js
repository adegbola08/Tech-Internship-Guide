import React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const TAB_NAMES = [{tabName: 'Classes', eventKey: 'classes'}, {tabName: 'Projects', eventKey: 'projects'}, {tabName: 'Resume', eventKey: 'resume'}, {tabName: 'Interview', eventKey: 'interview'},];

const NavItem = (props) => {
  const {tabName, eventKey} = props;
  return(
    <Nav.Item>
      <Nav.Link eventKey={eventKey}>{tabName}</Nav.Link>
    </Nav.Item>
  );
};

const TabPane = (props) => {
  const {eventKey, content} = props;
  return(
    <Tab.Pane eventKey={eventKey}>{content}</Tab.Pane>
  );
};

export const TabGroup = () => {
    return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="classes">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
              {TAB_NAMES.map((item, index) => (
                <NavItem key={index} tabName={item?.tabName} eventKey={item?.eventKey}/>
              ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {TAB_NAMES.map((item, index) => (
                  <TabPane key={index} eventKey={item?.eventKey} content={'Tella Content'}/>  
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    );
};