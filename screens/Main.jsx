
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Banner } from "../components/Banner"
import { Categories } from "../components/Categories"
import { NewArrivals } from "../components/NewArrivals"
import { HeaderMain }  from "../components/HeaderMain"
export const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <HeaderMain />
                <Banner />
                <Categories />
                <NewArrivals />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'start',
        padding: 16,
    }
})