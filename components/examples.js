import Head from 'next/head'
import { connect } from 'react-redux'
import Clock from './clock'
import Counter from './counter'
import DataList from './data-list'
import { Container, Button } from 'reactstrap'

function Examples ({ lastUpdate, light }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      </Head>
      <Container>
        <Button color="primary">Click me!</Button>
        <br />
        <Clock lastUpdate={lastUpdate} light={light} />
        <Counter />
        <DataList />
      </Container>
    </div>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)
