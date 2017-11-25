import React, { Component } from 'react';
import './Home.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Image, Card, Icon } from 'semantic-ui-react';
import faker from 'faker';
faker.locale = 'pl';

class Home extends Component {
  render() {
    return (
      <Grid>
        { new Array(2).fill({}).map((item, index) =>
          <Grid.Row key={index}>
            {new Array(1).fill({}).map((item, index) =>
              <Grid.Column width={16} key={index}>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>{faker.lorem.sentence()}</Card.Header>
                    <Card.Description>{faker.lorem.paragraphs(10)}</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>)
            }
          </Grid.Row>)
        }

      </Grid>
    );
  }
}

export default Home;
