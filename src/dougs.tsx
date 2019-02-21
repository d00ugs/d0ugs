import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { createRef } from 'office-ui-fabric-react/lib/Utilities';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Image } from 'office-ui-fabric-react/lib/Image';
import "./dougs.scss";
import me from './me.jpg';

export interface ICalloutBasicState {
  isCalloutVisible?: boolean;
}

const styles = mergeStyleSets({
  callout: {
    maxWidth: 600
  },
  header: {
    padding: '18px 24px 12px'
  },

});

// Example code
export default class Dougs extends React.Component<{}, ICalloutBasicState> {
  private menuButtonElement = createRef<HTMLElement>();

  public constructor(props: {}) {
    super(props);

    this.state = {
      isCalloutVisible: false
    };
  }

  public render(): JSX.Element {

    const dougsAbout = "I have a strong enthusiasm for technology, I am passionate about seeing the right tools being used for the right job. My career has often involved fighting the good fight and persuading that change is the right course. Not that crazy change just because what we have isn’t working change, but the measured, controlled, understood change – the change where everyone is happy, not just the IT guy that got the new thing. By contrast, at home there are two distinct setups: the it/IT just works {TV, wifi, family ipads and computers}; and the toy-box of half finished RasberryPI projects, Bluetooth code and web-apps. I'm 'into computers', cloud, tablet, coding, building. I like mobile, Internet of Things, Virtual Reality, Augmented Reality. As a proper old skool geek I am into all of the Linux, Apple and Microsoft.";

    return (
        <div>
            <div className="maindougs" ref={this.menuButtonElement}>
            <DefaultButton
                id="toggleCallout"
                onClick={this.onShowMenuClicked}
                text='dou.gs'
            />
            </div>
            <div
            className={styles.callout}
            hidden={!this.state.isCalloutVisible}
            >
        
            <div className="inner">
                <div className="image">
                    <Image src={me} alt="me" width={100} />
                </div>
                <div className="container">
                    <svg viewBox="0 0 1600 240" version="1.1">
                        <g stroke="none" fill="none" fillRule="evenodd" fillOpacity="0">
                            <text id="@dougs" stroke="#000" fill="#645F5A" fontWeight="normal" fontFamily="GloriaHallelujah-Regular, Gloria Hallelujah" fontSize="144">
                                <tspan x="3" y="120">
                                <tspan>@</tspan>
                                    <tspan>d</tspan>
                                    <tspan>o</tspan>
                                    <tspan>u</tspan>
                                    <tspan>g</tspan>
                                    <tspan>s</tspan>
                                </tspan>
                            </text>
                        </g>
                    </svg>

                </div>
            </div>
            <div>
                <p>
                    {dougsAbout}
                </p>
                <p>All of this brought to you by the KingOfFife</p>
            </div>
            <div className="actions">
                <DefaultButton 
                    id="whiterabbit"
                    onClick={this.showMeTheRabbit}
                    text='Follow the WhiteRabbit  🐇 ...'
                />
            </div>
        </div>
    </div>
    );
  }

  private onShowMenuClicked = (): void => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  };

  private showMeTheRabbit = (): void => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  };

}

