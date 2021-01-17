import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ route, navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        (blogPost) => blogPost.id === route.params.id
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    onPress={() => 
                        navigation.navigate('Edit', { id: route.params.id })}
                >
                    <Icon name="create" color="black" size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;
