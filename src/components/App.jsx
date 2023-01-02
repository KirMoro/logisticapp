import { Col, Layout, Row } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { TableRoutes } from './TableRoutes';
import { MapBlock } from './MapBlock';

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Row
          justify="center"
          align="middle"
        >
          <Col
            span={10}
            flex="auto"
          >
            <TableRoutes />
          </Col>
          <Col
            span={10}
            flex="auto"
          >
            <MapBlock />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
