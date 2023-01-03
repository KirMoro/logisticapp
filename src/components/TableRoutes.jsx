import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getRoute, removeRoute, setTableData} from '../redux/action';

const columns = [
  {
    title: 'Номер заявки',
    dataIndex: 'number',
  },
  {
    title: 'Координаты ОТ lat',
    dataIndex: 'fromLat',
  },
  {
    title: 'Координаты ОТ lng',
    dataIndex: 'fromLng',
  },
  {
    title: 'Координаты ДО lat',
    dataIndex: 'toLat',
  },
  {
    title: 'Координаты ДО lng',
    dataIndex: 'toLng',
  },
];

export const TableRoutes = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableData);

  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        onSelect: (record, selectedRow) => (
          selectedRow ? dispatch(getRoute(record)) : dispatch((removeRoute({})))
        ),
        onChange: (selectedRows) => {
          if (selectedRows.length > 1) {
            selectedRows.shift();
            dispatch((removeRoute({})));
          }
        },
      }}
      columns={columns}
      dataSource={tableData}
      pagination={false}
    />
  );
};
