import {Button} from 'antd';
import { Tabs } from 'antd';
import { BulkRegister } from './BulkRegister';
import { CreateStudent } from './CreateStudent';
import { StudentList } from './StudentList';
export const Student = () => {
    const items = [
        {
          key: '1',
          label: 'Add Student',
          children: <CreateStudent />,
        },
        {
          key: '2',
          label: 'Bulk Registration',
          children: <BulkRegister />,
        },
        {
          key: '3',
          label: 'Student List',
          children: <StudentList />,
        },
      ];
      const onChange = (key) => {
        console.log(key);
      };
    return <section >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </section>
}