import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import { getRoute, removeRoute } from '../redux/action';
import { tableData } from '../__fixtures__/tableData';

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

  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        onSelect: (record, selectedRow) => {
          if (selectedRow) {
            dispatch(getRoute(record));
          } else {
            dispatch((removeRoute({})));
          }
        },
        onChange: (selectedRows) => {
          if (selectedRows.length > 1) {
            selectedRows.shift();
          }
        },
      }}
      columns={columns}
      dataSource={tableData}
    />
  );
};
