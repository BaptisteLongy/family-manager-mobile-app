import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { deleteShoppingItem } from '../API/ShoppingListAPI'

class ShoppingItem extends React.Component {

    _deleteItemFromList() {
        deleteShoppingItem(this.props.idList, this.props.idItem)
        .then(data => this.props.handleDeletion(data.listOfItems))
    }

    render() {
        return (
            <View style={styles.main_component}>
                <Text style={styles.item_text}>{this.props.itemName}</Text>
                <Button 
                    style={styles.delete_button} 
                    title='Supprimer' 
                    onPress={() => this._deleteItemFromList()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_component: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5,
        fontSize: 14,
    },

    item_text: {
        flex: 3,
        textAlignVertical: "center",
        marginLeft: 10,
    },

    delete_button: {
        flex: 1
    },
})

export default ShoppingItem