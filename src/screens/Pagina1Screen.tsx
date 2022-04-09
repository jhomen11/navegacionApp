import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../themes/appTheme'

interface Props extends StackScreenProps<any, any>{}

const Pagina1Screen = ( { navigation }: Props) => {
  return (
    <View style={ styles.globalMargin}>
      <Text style={ styles.title}>Página 1 Screen</Text>
        <Button
          title='Ir a página 2'
          onPress={ () => navigation.navigate('Pagina2Screen')}
        />
        
        <Text>Navegar con argumentos</Text>
          <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity
            style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Jhonny'
            })}
          >
            <Text
              style={ styles.textoBotonGrande}
            >Jhonny</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ {...styles.botonGrande, backgroundColor: '#FF9427'}}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Yelitza'
            })}
          >
            <Text
              style={ styles.textoBotonGrande }
            >Yelitza</Text>
          </TouchableOpacity>
          </View>
        
        
        {/* <Button
          title='Ir a Persona Screen'
          onPress={ () => navigation.navigate('PersonaScreen')}
        /> */}
    </View>
  )
}

export default Pagina1Screen