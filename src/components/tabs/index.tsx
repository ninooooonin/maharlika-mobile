import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';

const IS_MONOBROW = isIPhoneWithMonobrow();

// Global Styles
import { align, flex } from '../../styles/global.styles';

// Components
import Tab from './tab';

// Styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    wrapper: {
        ...flex.row,
        ...align.end,
        paddingBottom: 3,
        paddingHorizontal: 16
    }
});

const propTypes = {
    data: PropTypes.any,
    containerStyle: PropTypes.any,
    activeIndex: PropTypes.string,
    onPressTab: PropTypes.func,
};

const defaultProps = {
    data: [],
    containerStyle: {},
    activeIndex: '',
    onPressTab: null,
};

const Tabs = (props: any) => {
    const { data, containerStyle, activeIndex, onPressTab} = props;

    const renderItem = ({ item, index }: any) => {
        let style = {};
        if(data.length === index + 1){
            style = { marginRight: 0 };
        }

        return (
            <Tab
                labelStyle={{ opacity: activeIndex === item.key ? 1: 0.3 }}
                label={item.label} 
                style={style} 
                onPress={() => onPressTab(item.key)}
            />
        )
    }

	return (
        <View style={[styles.container, containerStyle]}>
            <FlatList 
                horizontal={true}
                contentContainerStyle={styles.wrapper}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
            />
        </View>
	)
};

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default memo(Tabs);