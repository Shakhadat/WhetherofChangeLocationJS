import React from 'react';
import {
    View,
    Text, 
    ScrollView,
    Image,
    SafeAreaView,
    StatusBar,
    Dimensions
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import moment from 'moment';
import {styles,  markdownStyle} from './styles'

const rules = {
    blockquote: (node, children, parent, styles)=> (
        <View key={node.key} style={styles._VIEW_SAFE_blockquote}>
            <Text></Text>
            {children}
        </View>
    )
}

const CoinPage = ({
    name, 
    image, 
    genesis_date,
    hashing_algorithm,
    symbol,
    description
})=>{
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    scrollToLocation={(true, 0,0,0)}
                    scrollsToTop
                >
                    <StatusBar barStyle="dark-content"/>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                            <Text style={styles.title}>{name}</Text>
                        </View>
                        <Text style={styles.dateStyle}>
                            {moment(genesis_date).format('DD MMMM YYYY').toUpperCase()}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.category}>#{symbol}</Text>
                            <Text style={styles.category}>#{hashing_algorithm}</Text>
                        </View>
                        <Image style={{
                            width: Dimensions.get('window').width + 50,
                            height: 250,
                            marginVertical: 5
                        }} 
                        source={{uri: `${image?.small}`}}
                        />
                        <View
                            style={{
                                width: Dimensions.get('window').width,
                                paddingHorizontal: 12
                            }}
                        >
                            <Markdown style={markdownStyle} rules={rules}>
                                {description?.en}
                            </Markdown>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}


export default CoinPage;