import { Fragment, ReactNode } from 'react';
import { SmallDevices, OtherDevices } from './screens';

export const Main = (): ReactNode => {
  return (
    <Fragment>
      <SmallDevices />
      <OtherDevices />
    </Fragment>
  );
};
