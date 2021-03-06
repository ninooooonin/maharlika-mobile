import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, View } from 'react-native';
import { connect, useSelector } from 'react-redux';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import CardEvent from '../../components/card/event';
import CardRedeem from '../../components/card/redeem';

// Constants
import Images from '../../constants/images';

// Services
import EventServices from '../../services/event';

// Utils
import { generateID } from '../../helpers/utils.helper';

const Events = (props: any) => {
    const { navigation, route, user }: any = props;
    const { params } = route;

    // States
    const [activeTabIndex, setActiveTabIndex] = useState('all');
    const [data, setData] = useState<Array<any>>([]);

    const [redeem, setRedeems] = useState([
        { 
            id: generateID(), 
            image: Images.redeem_tote, 
            title: 'White recycled plastic market tote', 
            description: 'This hand crocheted market tote is created from approximately 60 recycled plastic bags. This is one of the most environmentally friendly bags you can take grocery shopping! Sturdy and surprisingly strong.', 
            pearl: '165 pearls'
        },
        { 
            id: generateID(), 
            image: Images.redeem_turtle, 
            title: 'Sea Turtle. Handcraft Holder Gift made of recycled plastic', 
            description: '', 
            pearl: '165 pearls'
        },
        { 
            id: generateID(), 
            image: Images.redeem_bangles, 
            title: 'African bangles handcrafted with recycled and woven plastic, solidarity bracelets in different colors', 
            description: '', 
            pearl: '100 pearls'
        }, 
        { 
            id: generateID(), 
            image: Images.redeem_earing, 
            title: 'Recycled plastic earrings, Earth collection, dangle earrings', 
            description: '', 
            pearl: '125 pearls'
        }, 
        { 
            id: generateID(), 
            image: Images.redeem_lace, 
            title: 'African Vinyl Disc Beads - Recycled Phono Records', 
            description: '', 
            pearl: '125 pearls'
        },
        { 
            id: generateID(), 
            image: Images.redeem_pen, 
            title: 'HDPE Pens/Slimline pen/handmade/100% Recycled', 
            description: '', 
            pearl: '135 pearls'
        },
        { 
            id: generateID(), 
            image: Images.redeem_pot, 
            title: 'Hexagon Coasters made from 100% Recycled Plastic (4-pack)', 
            description: '', 
            pearl: '145 pearls'
        }, 
        { 
            id: generateID(), 
            image: Images.redeem_smile, 
            title: 'Recycled plastic pouch / Recycled rice bag kit / Plastic pocket', 
            description: '', 
            pearl: '150 pearls'
        }
    ]);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const tabs = [
        { id: '1', key: 'all', label: 'All' },
        { id: '3', key: 'upcoming', label: 'Upcoming' },
        { id: '4', key: 'host', label: 'My Events' },
        { id: '5', key: 'redeem', label: 'Redeem' },
    ]

    const isRedeemActive = () => {
        return activeTabIndex === 'redeem';
    }

    const renderItem = ({ item, index }: any) => {
        let style: any = { marginBottom: 15 };

        if(data.length === index + 1) {
            style = {} 
        }

        const onPress = () => {
            navigate('Event::Details', item);
        }

        return (
            <CardEvent 
                data={item}
                containerStyle={style}
                onPress={onPress}
            />
        )
    }

    const renderRedeem = ({ item, index }: any) => {
        let style: any = { marginBottom: 15 };

        if(data.length === index + 1) {
            style = {} 
        }

        const onPress = () => {
            navigate('Redeem', item);
        }

        return (
            <CardRedeem 
                data={item}
                containerStyle={style}
                onPress={onPress}
            />
        )
    }

    const onPressCreate = () => {
        navigate('Event::OnBoard');
    }

    const getRedeemLists = async () => {
    }

    const getEventsByFilter = async (key: string) => {
        const params = {
            type: key,
            userId: user.id,
            token: user.token
        }

        let res: any;

        if(key === 'host') {
            res = await EventServices.host(params);
        } else {
            res = await EventServices.filter(params);
        }

        setData(res.data);
    }

    useEffect(() => {
        if(isRedeemActive()){
            getRedeemLists();
        } else {
            getEventsByFilter(activeTabIndex);
        }        
    }, [activeTabIndex]);

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header 
                    title={'Events'} 
                    tabs={tabs}
                    activeIndex={activeTabIndex}
                    onPressCreate={onPressCreate}
                    onPressTab={setActiveTabIndex}
                />

                { !isRedeemActive() &&
                    <FlatList
                        contentContainerStyle={styles.container}
                        scrollEnabled={true}
                        data={data}
                        renderItem={renderItem}
                    />
                }

                { isRedeemActive() &&
                    <FlatList
                        numColumns={2}
                        columnWrapperStyle={{ 
                            width: '100%',  
                            justifyContent: "space-around" 
                        }}
                        contentContainerStyle={[styles.container, { 
                            paddingHorizontal: 8, 
                            paddingBottom: isRedeemActive() ? 45: 18
                        }]}
                        scrollEnabled={true}
                        data={redeem}
                        renderItem={renderRedeem}
                    />
                }
                
            </View>
            { isRedeemActive() &&
                <View style={styles.pointsContainer}>
                    <View style={styles.pointsWrapper}>
                        <Text label={'Redeemable Pearls'} style={styles.pointsLabel} type={'medium'} />
                        <Text label={'1000'} style={styles.points} type={'bold'} />
                    </View>
                </View>
            }
        </SafeAreaView>
    )
}

const bindAction = (dispatch: any) => {
    return {}
}

const mapStateToProps = (state: any) => {
    return {
        error: state.auth.error,
        user: state.auth.user
    };
}

export default connect(mapStateToProps, bindAction)(Events);