import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleRelaxed = () => (
  <Grid relaxed columns={4}>
    <Grid.Column>
      <Image className="skill-img" src="https://react.semantic-ui.com/logo.png" />
    </Grid.Column>
    <Grid.Column>
      <Image className="skill-img"  src="https://react.semantic-ui.com/logo.png" />
    </Grid.Column>
    <Grid.Column>
      <Image className="skill-img" src="https://react.semantic-ui.com/logo.png" />
    </Grid.Column>
    <Grid.Column>
      <Image className="skill-img"  src="https://react.semantic-ui.com/logo.png" />
    </Grid.Column>
  </Grid>
)

export default GridExampleRelaxed

