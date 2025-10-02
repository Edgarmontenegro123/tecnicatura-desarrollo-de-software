import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent  } from 'react-native';

type MyButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
};

const MyButton: React.FC<MyButtonProps> = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'hotpink',
        marginHorizontal: 5,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    flexButton: {
        flex: 1,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default MyButton;
