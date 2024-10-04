//user option that uses common/Option.js//
import OverflowButton from 'match/frontend/src/common/component/ptionsModal';

const SomeComponent = () => {
  const handleOverflowPress = () => {
    console.log('Overflow button pressed');
  };

  return (
    <OverflowButton onPress={handleOverflowPress} />
  );
};
