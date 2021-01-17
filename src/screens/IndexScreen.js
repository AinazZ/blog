import React, { useContext, useLayoutEffect } from 'react';
import {
    View, Text, StyleSheet, FlatList, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Icon name="add" color="black" size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Icon name="delete-outline" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
        color: "black"
    }
});

export default IndexScreen;