import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { createRef } from 'office-ui-fabric-react/lib/Utilities';
import { getTheme, FontWeights, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Image } from 'office-ui-fabric-react/lib/Image';

import me from './me.jpg';

export interface ICalloutBasicState {
  isCalloutVisible?: boolean;
}

// Themed styles for the example.
const theme = getTheme();
const styles = mergeStyleSets({
  buttonArea: {
    verticalAlign: 'top',
    display: 'inline-block',
    textAlign: 'center'
  },
  callout: {
    maxWidth: 600
  },
  header: {
    padding: '18px 24px 12px'
  },
  title: [
    theme.fonts.xLarge,
    {
      margin: 0,
      color: theme.palette.neutralPrimary,
      fontWeight: FontWeights.semilight
    }
  ],
  inner: {
    height: '100%',
    padding: '0 24px 20px'
  },
  actions: {
    position: 'relative',
    marginTop: 20,
    width: '100%',
    whiteSpace: 'nowrap'
  }
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

    const dougsTitle = "I am dougs";

    return (
      <div>
        <div className={styles.buttonArea} ref={this.menuButtonElement}>
          <DefaultButton
            id="toggleCallout"
            onClick={this.onShowMenuClicked}
            text='dou.gs'
          />
        </div>
        <Callout
          className={styles.callout}
          ariaLabelledBy={'callout-label-1'}
          ariaDescribedBy={'callout-description-1'}
          role={'alertdialog'}
          gapSpace={0}
          target={this.menuButtonElement.value}
          onDismiss={this.onCalloutDismiss}
          setInitialFocus={true}
          hidden={!this.state.isCalloutVisible}
        >
          <div className={styles.header}>
            <p className={styles.title} id={'callout-label-1'}>
              {dougsTitle}
            </p>
          </div>
          <div className={styles.inner}>
            <div>
                <Image src={me} alt="me" width={100} />
              <p id={'callout-description-1'}>
                {dougsAbout}
              </p>
            </div>
            <div className={styles.actions}>
            <DefaultButton 
                id="whiterabbit"
                onClick={this.showMeTheRabbit}
                text='Follow the WhiteRabbit ...'
            />
            </div>
          </div>
        </Callout>
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

  private onCalloutDismiss = (): void => {
    this.setState({
      isCalloutVisible: false
    });
  };
}