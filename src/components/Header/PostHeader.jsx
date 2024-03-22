import React from 'react';
import {Text} from 'react-native';

const PostHeader = ({item}) => {
    return (
        <Text>{item.caption}</Text>
    );
};

export default PostHeader;