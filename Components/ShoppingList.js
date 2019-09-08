import React from 'react'
import { FlatList, TextInput, Button, StyleSheet, View } from 'react-native'
import { getShoppingList, addShoppingItem } from '../API/ShoppingListAPI'
import ShoppingItem from './ShoppingItem'

class ShoppingList extends React.Component {

    constructor(props) {
        super(props)
        this.newItemName = ''
        this.state = {
            shoppingItems: [],
        }
    }

    updateShoppingListInState = (listOfItems) => {
        this.setState({ shoppingItems: listOfItems })
    }

    componentDidMount() {
        this.loadShoppingList(1)
    }

    loadShoppingList = (id) => {
        getShoppingList(id).then(data => {
            this.updateShoppingListInState(data.listOfItems)
        })
    }

    addItemToShoppingList() {
        console.log(this.newItemName)
        if (this.newItemName.length > 0) {
            addShoppingItem(1, this.newItemName).then((data) => {
                this.newItemName = ''
                this.updateShoppingListInState(data.listOfItems)
                this.clearText()
            })
        }
    }

    addTextInputChange(text) {
        this.newItemName = text
    }

    clearText = () => {
        this._textInput.setNativeProps({ text: '' });
    }

    render() {
        return (
            <View style={styles.main_component}>
                <FlatList
                    style={styles.list_container}
                    data={this.state.shoppingItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={(item) => <ShoppingItem
                        itemName={item.item.name}
                        idList={1}
                        idItem={item.item.id}
                        handleDeletion={this.updateShoppingListInState} />}
                    extraData={this.state}
                />
                <View style={styles.new_item_component}>
                    <TextInput
                        // ref={this.inputController}
                        style={styles.item_input}
                        placeholder='Tu veux quoi ?'
                        onChangeText={(text) => this.addTextInputChange(text)}
                        onSubmitEditing={() => this.addItemToShoppingList()}
                        ref={component => this._textInput = component}
                    />
                    <Button style={styles.add_button} title='Ajouter' onPress={() => this.addItemToShoppingList()} />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_component: {
        flex: 1,
    },

    list_container: {

    },

    new_item_component: {

        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5,
        fontSize: 14,
    },

    item_input: {
        flex: 3,
        borderWidth: 1,
        marginHorizontal: 10,
    },

    add_button: {
        flex: 1,
        padding: 5,
    },
})

export default ShoppingList