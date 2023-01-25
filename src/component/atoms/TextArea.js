import React from 'react';
import { TextInput, View } from 'react-native';
import Texts from './Textst';


export default function TextArea({
    label,
    error,
    numberLines,
    containerStyle,
    labelStyle,
    textStyle,
    borderColor,
    ...props
}) {

    return (
        <View style={[containerStyle, { marginBottom: 10 }]}>
            {label && (
                <Texts style={[labelStyle, { color: '#9A9A9A', fontWeight: '500' }]}>
                    {label}
                </Texts>
            )}
            <TextInput
                multiline={true}
                numberOfLines={numberLines ? numberLines : 4}
                placeholder={label}
                placeholderTextColor={borderColor ? borderColor : 'grey'}
                style={[
                    textStyle,
                    {
                        color: borderColor ? borderColor : '#000',
                        borderWidth: 1,
                        borderColor: '#D7D7D7',
                        borderRadius: 10,
                        textAlignVertical: 'top',
                        padding: 10,
                    },
                ]}
                {...props}
            />
            {error != undefined && (
                <View>
                    {error == '' || <Texts style={{ color: 'red' }}>{error}</Texts>}
                </View>
            )}
        </View>
    );
}