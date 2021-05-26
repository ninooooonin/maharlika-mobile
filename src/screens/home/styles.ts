import { StyleSheet } from 'react-native';
import { flex, justify, bg, font } from '../../styles/global.styles';

const styles = StyleSheet.create({ 
    safearea: {
        ...flex.on,
        ...bg.base
    },
    layout: {
        ...flex.on,
        ...bg.base,
    },
    scroll: {},
    container: {
    },
    wrapper: {
        ...flex.on,
        ...justify.center
    },
});

export default styles;