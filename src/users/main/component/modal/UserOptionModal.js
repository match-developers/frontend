// this code has no method of closing the modal
import React, { useState } from 'react';
import OverflowButton from 'common/components/buttons/OverflowButton';
import OptionsModal from 'match/frontend/src/common/component/OptionsModal';

const SomeComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOverflowPress = () => {
    setIsModalVisible(true); // Show the modal when the OverflowButton is pressed
  };

  return (
    <>
      <OverflowButton onPress={handleOverflowPress} />
      <OptionsModal visible={isModalVisible} />
    </>
  );
};

export default SomeComponent;
