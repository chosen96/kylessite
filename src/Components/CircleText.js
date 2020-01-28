import * as React from 'react';
import { Constants, Svg } from 'expo';

const { Circle, Text, TextPath, TSpan, G, Path } = Svg;

class SvgComponent extends Component {
  render(){
  return(
      <Svg height="100%" width="100%" viewBox="0 0 300 300">
        <G id="circle">
          <Circle
            r={100}
            x={150}
            y={150}
            fill="none"
            stroke="#00008b"
            strokeWidth={14}
          />
        </G>
        <G id="webCompatible">
          <Path
            d="M 64,0 A 64,64 0 0 1 -64,0 A 64,64 0 0 1 64,0"
            transform="translate(150,150)"
            stroke="darkblue"
            fill="none"
          />
        </G>
        <Text fill="#000" fontSize="14">
          <TextPath href="#circle">
            <TSpan dy={-14}>
              Text along a curved path... Text along a curved path... Text along a
              curved path...
            </TSpan>
          </TextPath>
        </Text>
        <Text fill="#000" fontSize="10">
          <TextPath href="#webCompatible">
            <TSpan>
              Text along a curved path... Text along a curved path... Text along a
              curved path...
            </TSpan>
          </TextPath>
        </Text>
      </Svg>
    );
  }
}

export  default  CircleText;
