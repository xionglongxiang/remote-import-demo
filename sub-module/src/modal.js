import {
  Button,
  Modal,
} from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const destroyAll = () => {
  Modal.destroyAll();
};

const showConfirm = (content) => {
  confirm({
    icon: <ExclamationCircleOutlined />,
    content: <Button onClick={destroyAll}>{content}</Button>,
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
export default showConfirm;
