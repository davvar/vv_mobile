import React, { useState } from 'react'
import { View, StyleSheet, TouchableHighlight } from "react-native";
// import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const icon = { size: 30, color: '#eeeeee', activeColor: '#222831' }
const tabs = [
    { name: 'format-list-bulleted', Comp: MaterialIcons },
    { name: 'enviromento', Comp: AntDesign },
    { name: 'account-circle', Comp: MaterialIcons },
]

enum Tabs { CLIENTS, NOTIFY_LOCATION, ACCOUNT }

export default function TabsComponent() {
    const [activeTab, setActiveTab] = useState(Tabs.NOTIFY_LOCATION)
    const isActive = (tab: number) => tab === activeTab
    // const navigation = useNavigation();

    const navigate = (tab: number) => () => {
        setActiveTab(tab)
        // navigation.navigate('Clients')
    }

    return (
        <View style={styles.container}>
            {tabs.map(({ name, Comp }, tab) => (
                <TouchableHighlight
                    key={tab}
                    onPress={navigate(tab)}
                    style={styles[isActive(tab) ? 'activeTab' : 'tab']}
                    underlayColor={icon.color}>
                    <Comp name={name} size={icon.size} color={icon[isActive(tab) ? 'activeColor' : 'color']} />
                </TouchableHighlight>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#222831',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: icon.color
    },
    get activeTab() {
        return {
            ...this.tab, backgroundColor: icon.color
        }
    }
})