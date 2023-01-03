import {useEffect} from "react";
import { Col, Layout, Row } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { TableRoutes } from './TableRoutes';
import { MapBlock } from './MapBlock';
import {useDispatch} from "react-redux";
import {setTableData} from "../redux/action";
import {tableData} from "../__fixtures__/tableData";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTableData(tableData));
  }, [tableData]);

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
