import React from "react";
import {useLocation} from "react-router";
import testAvatar from './avatar.png'
import FemaleIcon from "./FemaleIcon";
import MaleIcon from "./maleIcon";
import Icon from '@ant-design/icons';

// const FemaleSvg = () => (
//   <svg t="1611825613734" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
//        p-id="24594" width="200" height="200">
//     <defs>
//       <style type="text/css"></style>
//     </defs>
//     <path
//       d="M512 748.8c-46.1 0-90.9-9-133.1-26.9-40.7-17.2-77.3-41.9-108.6-73.2-31.4-31.4-56-67.9-73.2-108.6-17.8-42.2-26.9-86.9-26.9-133.1s9-90.9 26.9-133.1c17.2-40.7 41.9-77.3 73.2-108.6 31.4-31.4 67.9-56 108.6-73.2 42.2-17.8 86.9-26.9 133.1-26.9s90.9 9 133.1 26.9c40.7 17.2 77.3 41.9 108.6 73.2 31.4 31.4 56 67.9 73.2 108.6 17.8 42.2 26.9 86.9 26.9 133.1s-9 90.9-26.9 133.1c-17.2 40.7-41.9 77.3-73.2 108.6-31.4 31.4-67.9 56-108.6 73.2-42.2 17.9-87 26.9-133.1 26.9z m0-623.5c-75.3 0-146 29.3-199.3 82.5s-82.5 124-82.5 199.3 29.3 146 82.5 199.3c53.2 53.2 124 82.5 199.3 82.5s146-29.3 199.3-82.5c53.2-53.2 82.5-124 82.5-199.3s-29.3-146-82.5-199.3c-53.3-53.2-124-82.5-199.3-82.5zM676.1 837.9h-0.2L353 835.5c-16.6-0.1-29.9-13.6-29.8-30.2 0.1-16.5 13.5-29.8 30-29.8h0.2l322.8 2.3c16.6 0.1 29.9 13.6 29.8 30.2 0 16.6-13.5 29.9-29.9 29.9z"
//       fill="#FF6E6E" p-id="24595"></path>
//     <path
//       d="M510.8 958.7h-0.3c-16.6-0.2-29.8-13.8-29.7-30.3l2.3-205.2c0.2-16.5 13.6-29.7 30-29.7h0.3c16.6 0.2 29.8 13.8 29.7 30.3L540.8 929c-0.2 16.5-13.6 29.7-30 29.7z"
//       fill="#FF6E6E" p-id="24596"></path>
//   </svg>
// );
//
// const FemaleIcon = props => <Icon component={FemaleSvg} {...props} />;


const FriendInfo = () => {
  let location = useLocation();

  return(
    <div className={"friendInfo"}>
      <div className={"profile"}>
        <div className={"friendAvatar"}>
          <img src={testAvatar} style={{width: '100px', height: '100px',}}/>
        </div>
        <div className={"nickNameArea"}>
          <h4 className={"nickname"}>JayZhou周杰伦</h4>
          <FemaleIcon style={{fontSize: '24px'}}/>
          <MaleIcon style={{fontSize: '24px'}}/>
        </div>
        <div className={"meta-area"}>
          <div className={"meta-area-item"}>
            <label className={"friend-label"}>备注：</label>
            <p className={"friend-p"}>虚假的周杰伦</p>
          </div>
          <div className={"meta-area-item"}>
            <label className={"friend-label"}>地区：</label>
            <p className={"friend-p"}>江苏 南京</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FriendInfo;
