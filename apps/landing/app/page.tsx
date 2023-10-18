import { add } from '@antd-monorepo/shared/utils';

export default async function Index() {
  const testSharedUtils = add(1, 1);

  return (
    <div>
      <div className="text-blue-500">Test Landing Apps!</div>
      <div className="text-blue-500">Add = {testSharedUtils}</div>
    </div>
  );
}
