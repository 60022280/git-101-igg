import React from 'react'
import { Button } from 'react-native'
export default (props) => {
    return <Button
    title={props.title}
    color={props.color}
    onPress={() =>{ props.onChangColor(props.color)}}
    />
}