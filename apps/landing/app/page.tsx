import { Button, ConfigProvider } from 'antd';
import { add, theme } from '@antd-monorepo/shared/utils';

export default async function Index() {
  const testSharedUtils = add(1, 1);

  return (
    <ConfigProvider theme={theme}>
      <div>
        <div className="text-blue-500">Test Landing Apps!</div>
        <div className="text-blue-500">Add = {testSharedUtils}</div>
        <Button type="primary" block href="/with-sub-components">
          With Sub Components
        </Button>
      </div>
    </ConfigProvider>
  );
}
