import * as React from 'react';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { IImageProps } from 'office-ui-fabric-react/lib/Image';
import me from './me.jpg';

export interface IdougsPopup {
    isPopupVisible?: boolean;
}
export default class Dougs extends React.Component<{}, IdougsPopup> {
    private menuButtonElement: HTMLElement;
  
    constructor(props: {}) {
      super(props);
  
      this._onDismiss = this._onDismiss.bind(this);
  
      this.state = {
        isPopupVisible: false
      };
    }
  
    public render(): JSX.Element {
      const { isPopupVisible } = this.state;
      const dougsPrimaryButton: IButtonProps = {
        children: 'Follow the WhiteRabbit...'
      };
      const dougsLaterButton: IButtonProps = {
        children: 'Maybe later',
        onClick: this._onDismiss
      };
      const dougsImageProps: IImageProps = { src: me, width: 100 };

      const dougsAbout = "I have a strong enthusiasm for technology, I am passionate about seeing the right tools being used for the right job. My career has often involved fighting the good fight and persuading that change is the right course. Not that crazy change just because what we have isn’t working change, but the measured, controlled, understood change – the change where everyone is happy, not just the IT guy that got the new thing. By contrast, at home there are two distinct setups: the it/IT just works {TV, wifi, family ipads and computers}; and the toy-box of half finished RasberryPI projects, Bluetooth code and web-apps. I'm 'into computers', cloud, tablet, coding, building. I like mobile, Internet of Things, Virtual Reality, Augmented Reality. As a proper old skool geek I am into all of the Linux, Apple and Microsoft.";
  
      return (
        <div className="dougs_main">
          <span
            className="dougs_button"
            ref={menuButton => (this.menuButtonElement = menuButton!)}
          >
            <DefaultButton
              onClick={this._onDismiss}
              text={'dou.gs'}
            />
          </span>
          {isPopupVisible ? (
            <div>
              <TeachingBubble
                illustrationImage={dougsImageProps}
                targetElement={this.menuButtonElement}
                primaryButtonProps={dougsPrimaryButton}
                secondaryButtonProps={dougsLaterButton}
                onDismiss={this._onDismiss}
                isWide={true}
                headline="I am dougs"
              > {dougsAbout}
              </TeachingBubble>
            </div>
          ) : null}
        </div>
      );
    }
  
    private _onDismiss(ev: any): void {
      this.setState({
        isPopupVisible: !this.state.isPopupVisible
      });
    }
  }
