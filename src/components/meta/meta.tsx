import { useMeta } from './meta.hook';
import { MetaProperties } from './meta.types';

export const Meta = (props: MetaProperties) => {
  useMeta(props);

  return props.children;
};
