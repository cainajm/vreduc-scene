import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  VrButton,
  asset,
  AmbientLight,
  PointLight
} from 'react-360';

import Entity from 'Entity';

export default class React3DView extends React.Component {
  render() {
    return (
      <View>
        <View style={{transform: [{rotateY: 90}]}}>
          <PointLight
            style={{
              color: 'white',
              transform: [
                {translate: [0, 12, 0]}
              ]
            }}
          />
          <Entity
            source={{ obj: asset('model.obj'),
                      mtl: asset('materials.mtl')}}

            lit={true}
            style={{
              color: "#FFF",
              transform: [{scale: 20}]}}
          />
        </View>   
        <View>
          <Entity
            source={{ obj: asset('Teacher_01.obj'),
                      mtl: asset('Teacher_01.mtl')}}

            lit={true}
            style={{
              transform: [
                {translate: [0, -5, -17]},
                {scale: 0.7}
              ]
            }}
          />
        </View>  
      </View>
    );
  }
};

AppRegistry.registerComponent('React3DView', () => React3DView);
