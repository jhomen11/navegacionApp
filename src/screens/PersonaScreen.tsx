import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigator'
import { styles } from '../themes/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

export const PersonaScreen = ({ navigation, route}: Props ) => {

    const params = route.params

    useEffect( () =>{
        navigation.setOptions({
            title: params.nombre
        })
    },[])

  return (
    
    <View style={ styles.globalMargin}>
        <Text style={ styles.title}>
            {
                JSON.stringify(params, null, 3)
            }
        </Text>

        <Button
          title='Volver'
          onPress={ () => navigation.popToTop()}
        />
    </View>
  )
}
