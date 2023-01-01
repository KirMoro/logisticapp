import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { TableRoutes } from './components/TableRoutes';
import { MapBlock } from './components/MapBlock';

function App() {
  return (
    <Layout>
      <Content>
        <Row justify="center" align="middle">
          <Col span={9}>
            <TableRoutes />
          </Col>
          <Col span={15}>
            <MapBlock />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
