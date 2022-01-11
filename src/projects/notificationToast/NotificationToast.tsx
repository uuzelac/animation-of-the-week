import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/button';
import Toast from './toast';
import { ToastType } from './toast/common';
import styles from './styles';

const NotificationToast = (): JSX.Element => {
  const [showTopToast, setShowTopToast] = useState(false);
  const [showBottomToast, setShowBottomToast] = useState(false);

  const onPressshowTopToast = (): void => {
    setShowTopToast(!showTopToast);
  };

  const onPressShowBottomToast = (): void => {
    setShowBottomToast(!showBottomToast);
  };

  const renderTopButtonLabel = (): string => {
    return showTopToast ? 'Hide top toast' : 'Show top toast';
  };

  const renderBottomButtonLabel = (): string => {
    return showBottomToast ? 'Hide bottom toast' : 'Show bottom toast';
  };

  return (
    <View style={styles.container}>
      <Toast
        showToast={showTopToast}
        type={ToastType.Top}
        message="Hi there! I am sending you some information."
      />
      <Toast
        showToast={showBottomToast}
        type={ToastType.Bottom}
        message="Something went wrong, please try again later."
      />
      <Button
        onPress={onPressshowTopToast}
        label={renderTopButtonLabel()}
        customStyle={styles.button}
      />
      <Button
        onPress={onPressShowBottomToast}
        label={renderBottomButtonLabel()}
        customStyle={styles.button}
      />
    </View>
  );
};

export default NotificationToast;
