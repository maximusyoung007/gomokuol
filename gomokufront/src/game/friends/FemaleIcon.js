import React from 'react';
import {ReactComponent as FemaleSvg} from './female.svg';
import Icon from "@ant-design/icons";

const FemaleIcon = (props) => {
  return(
    <Icon component={FemaleSvg} {...props}/>
  )
}
export default FemaleIcon;

