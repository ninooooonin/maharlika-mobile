import React, { useState, memo } from 'react';
import { Image, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { getStatusBarHeight, isIPhoneWithMonobrow } from 'react-native-status-bar-height';

const IS_MONOBROW = isIPhoneWithMonobrow();

// Components
import Text from '../text';
import Progress from '../progress';

// Constants
import Images from '../../constants/images';

// Global Styles
import { align, flex, font, shadow, resizeMode, justify } from '../../styles/global.styles';

export const styles = StyleSheet.create({
    container: {
        ...shadow.card,
        width: '100%', 
    },
    wrapper: {
        borderRadius: 8,
        // paddingBottom: 12,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },

    banner: {
        height: 145, 
        width: '100%', 
        backgroundColor: '#E9E9E9',
        position: 'relative'
    },
    image: {
        height: '100%', 
    },
    gradient: {
        ...resizeMode.cover,
        position: 'absolute',
        bottom: 0,
        height: 100,
        opacity: 0.3
    },

    context: {
        width: '100%',
        paddingTop: 12,
        paddingHorizontal: 12,
        paddingBottom: 12
    },
    avatar: {
        height: 40,
        width: 40,
        backgroundColor: '#ecf0f1',
        borderRadius: 50
    },
    contextWrapper: {
        paddingLeft: 10
    },
    contextMetaWrapper: {
        ...flex.row
    },
    contextTitle: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 16: 18,
        lineHeight: 21
    },
    contextMeta: {
        color: '#6E6E6E',
        fontSize: IS_MONOBROW ? 11: 12,
        lineHeight: 15,
        marginRight: 8
    },
    contextInfo: {
        ...flex.row,
        ...align.center,
        width: '100%', 
        marginBottom: 8
    },
    contextDescriptionWrapper: {
        width: '100%', 
    },
    contextDescription: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 13.5: 16,
        lineHeight: IS_MONOBROW ? 16: 18
    },

    // TODO: Create Separate Components
    cardActions: {
        paddingHorizontal: 12,
        paddingBottom: 8,
        paddingTop: 12
    },
    cardAction: {
        ...flex.row,
        ...justify.spaceBetween,
        marginBottom: 8
    },
    cardActionButton: {
        backgroundColor: '#FF2D55',
        paddingHorizontal: 10,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 40
    },
    cardActionButtonLabel: {
        color: '#FFFFFF',
        fontSize: IS_MONOBROW ? 13: 16,
        lineHeight: 21
    },
});

const propTypes = {
    data: PropTypes.any,
    containerStyle: PropTypes.any,
    onPress: PropTypes.func
};

const defaultProps = {
    data: {},
    containerStyle: {},
    onPress: null
};

const CardEvent = (props: any) => {
    const { data, containerStyle, onPress }: any = props;
    
    return (
        <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
            <View style={styles.wrapper}>

                <View style={styles.context}>
                    <View style={styles.contextInfo}>
                        <View style={styles.avatar}/>
                        <View style={styles.contextWrapper}>
                            <Text label={'Manila City Official'} 
                                type={'semiBold'} style={styles.contextTitle}/>
                            <View style={styles.contextMetaWrapper}>
                                <Text label={'Monday, May 30 at 8AM'} 
                                    type={'medium'} style={styles.contextMeta}/>
                                <Text label={'Manila Bay Coast'} 
                                    type={'medium'} style={styles.contextMeta}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contextDescriptionWrapper}>
                        <Text label={'Weekly Coastal Clean-up ⛱.\nJoin our volunteer and get FREE grocery basket.\nLimited to 100 slots only.'} 
                            type={'medium'} style={styles.contextDescription}/>
                    </View>
                </View>
                
                <View style={styles.banner}>
                    <Image source={Images.post_1} style={styles.image} />
                    <Image source={Images.gradient_black} fadeDuration={1} style={styles.gradient}/>
                </View>

                <View style={styles.cardActions}>

                    <View style={styles.cardAction}>
                        <Progress label={'65 slots left'} progress={'40%'} />

                        <Pressable style={styles.cardActionButton}>
                            <Text label={'Join'} type={'medium'} 
                                style={styles.cardActionButtonLabel}/>
                        </Pressable>
                    </View>

                </View>
            </View>
        </Pressable>
    )
}

CardEvent.propTypes = propTypes;
CardEvent.defaultProps = defaultProps;

export default memo(CardEvent);