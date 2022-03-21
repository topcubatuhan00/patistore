/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

import styles from './style';

const ProductCard = props => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageBackground}>
                {props.product.inStock ? <Image resizeMode="contain" style={styles.image} source={{uri: props.product.imgURL}} /> : <Image resizeMode="contain" style={styles.imageNone} source={{uri: props.product.imgURL}} />}
            </View>
            {props.product.inStock ? <Text style={styles.title}>{props.product.title}</Text> : <Text style={styles.titleNone}>{props.product.title}</Text>}
            <View style={styles.content}>
                {props.product.inStock ? <Text style={styles.price}>{props.product.price}</Text> : <Text style={styles.stock}>STOKTA YOK</Text>}
            </View>
        </SafeAreaView>
    );
};

export default ProductCard;
