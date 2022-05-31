import { useEffect } from 'react';
import { useStore } from '../store';
import { NextItem as Component } from './nextItem.component';

export function NextItem() {
  const nextItem = useStore((state) => state.nextItem);

  useEffect(() => {
    console.log('Next item', nextItem?.id, nextItem);
  }, [nextItem?.id, nextItem]);

  if (!nextItem) return null;
  return <Component {...nextItem} />;
}
