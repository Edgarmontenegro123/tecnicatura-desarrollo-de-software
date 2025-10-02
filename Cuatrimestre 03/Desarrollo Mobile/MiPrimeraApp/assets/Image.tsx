import {Image} from 'react-native';

const MyImage = () => {
    return (
        <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={{ width: 100, height: 100, margin: 40, borderRadius: 5, }}
        />
    )
}

export default MyImage;