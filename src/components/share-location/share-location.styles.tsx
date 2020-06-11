import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";

type Style = {
    container: ViewStyle;
    title: TextStyle;
    icon: ImageStyle;
};

export const styles = StyleSheet.create<Style>({
    container: {
        flex: 1
    },
    title: {
        color: 'red'
    },
    icon: {
        width: 10,
        height: 10
    }
});