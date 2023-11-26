import { Button, ConfigProvider } from 'antd';
import { add, theme } from '@antd-monorepo/shared/utils';

export default async function Index() {
  const testSharedUtils = add(1, 1);

  return (
    <ConfigProvider theme={theme}>
      <div className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white">
        <nav className="h-12 bg-white">Navbar</nav>
        <div className="flex h-full flex-col overflow-x-hidden">
          <div className="container flex h-full flex-col">
            <h4 className="text-blue-500">Test Landing Apps!</h4>
            <div className="text-blue-500">Add = {testSharedUtils}</div>
            <Button
              type="primary"
              block
              href="/with-sub-components"
            >
              With Sub Components
            </Button>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
