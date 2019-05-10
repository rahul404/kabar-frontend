import React from 'react';
import {
    FlatList,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {URL} from "../../constants";

export default class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
        };

        this.fetchCategories();

    }
    renderItem(item) {
        return (
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 15, borderWidth: 1, borderColor: '#aaa'}}
                              onPress={() => this.props.navigation.navigate('NewsFeeds',  {
                                  category: item.key
                              })}>
                <Text style={{ fontSize: 20}}>{ item.key }</Text>
            </TouchableOpacity>
        );
    }

    fetchCategories() {
        fetch(URL + "category/all")
            .then((response) => {
                return response.json();
            }).then((responseJson) => {
                const items = [];
                for(var i=0;i<responseJson.length;i++) {
                    items .push({
                        key: responseJson[i]
                    });
                }
                this.setState({
                    categories: items
                })
        });

    }


    render() {
        return(
            <View style={{ flex: 1 , paddingTop: 48}}>
                <Text style={{ marginBottom: 20, paddingHorizontal: 15, fontSize: 22, fontWeight: "600"}}>Select a category : </Text>
                <FlatList
                    data={this.state.categories}
                    renderItem={({item}) => this.renderItem(item)}
                />
            </View>
        );
    }

    navigate() {
        this.state.navigation.navigate('Login');
    }
}
