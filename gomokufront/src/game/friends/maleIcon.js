import React from 'react'
import {ReactComponent as MaleSvg} from "./male.svg";
import Icon from "@ant-design/icons";

const MaleIcon = (props) => {
  return (
    <Icon component={MaleSvg} {...props}/>
  )
}

export default MaleIcon;
