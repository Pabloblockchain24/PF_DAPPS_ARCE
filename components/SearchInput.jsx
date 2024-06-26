import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import { theme } from '../config/theme'
import { FontAwesome } from '@expo/vector-icons';

export const SearchInput = ({ onSearch, ...props }) => {
return (
    <View style={styles.searchProduct}>
        <TextInput
            style={styles.inputProduct}
            placeholder="Ingresa producto a buscar ... "
            {...props}
        />
        <Pressable onPress={onSearch} style={styles.searchIconContainer}>
            <FontAwesome name="search" size={24} style={styles.searchIcon} />
        </Pressable>
    </View>
)
}

const styles = StyleSheet.create({
    searchProduct: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: theme.colors.gray[300],
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    inputProduct: {
        flex: 1,
        color: theme.colors.gray[700],
        padding: 4,
        fontSize: 16,
    },
    searchIconContainer: {
        padding: 10,
        backgroundColor: theme.colors.gray[400],
        borderRadius: 30,
    },
    searchIcon: {
        color: 'white',
    },

});
