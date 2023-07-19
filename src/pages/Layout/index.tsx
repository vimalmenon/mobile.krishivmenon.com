import React from 'react';

import { useDrawerHelper, useNavigationHelper } from '@context';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import { ILayout } from './types';

export const Layout: React.FC<ILayout> = ({ children, page }) => {
  const { setCurrentPage } = useNavigationHelper();
  const { onClose } = useDrawerHelper();
  const isFocused = useIsFocused();
  React.useLayoutEffect(() => {
    setCurrentPage(page);
    onClose();
  }, [isFocused]);
  return <SafeAreaView className="flex-1">{children}</SafeAreaView>;
};
