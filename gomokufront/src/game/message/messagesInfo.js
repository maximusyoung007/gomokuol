import React from 'react'
import { Button } from "antd";
import { SmileOutlined, FolderOutlined, ScissorOutlined } from '@ant-design/icons';
import myAvatar from './avatar.jpg';
import others from './others.jpeg';

require('../game.css')

const MessageInfo = () => {
  return(
    <div>
      <div className={'box_hd'}>
        <div className={'title_wrap'}>
          <div className={'title'}>
            <a className={'title_name'}>
              周杰伦
            </a>
          </div>
        </div>
      </div>
      <div className={'chat'}>
        <div className={'chat-bd'}>
          <div className={'scope'}>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-others'}>
              <img className={'message-others-avatar'} src={others}/>
              <div className={"content-others"}>
                <h4 className={'other-names'}>周杰伦</h4>
                <div className={'bubble-content-others'}>
                  <div className={'bubble-others'}>
                    <div className={'plain-others'}>
                      <div className={'message-plain-others'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'message-me'}>
              <img className={'message-me-avatar'} src={myAvatar}/>
              <div className={'content-me'}>
                <div className={'bubble-content'}>
                  <div className={'bubble'}>
                    <div className={'plain'}>
                      <div className={'message-plain'}>
                        你好
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'chat-box-foot'}>
        <div className={'toolbar'}>
          <Button type="link" icon={<SmileOutlined/>} size="large"></Button>
          <Button type="link" icon={<ScissorOutlined />} size="large"></Button>
          <Button type="link" icon={<FolderOutlined/>} size="large"></Button>
        </div>
        <pre className={'editArea'}></pre>
        <div className={'action'}>
          <span className={'desc'}>按下cmd+enter换行</span>
          <Button>发送</Button>
        </div>
      </div>
    </div>
  )
}
export default MessageInfo
