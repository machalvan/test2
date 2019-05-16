import React from 'react'
import Lottie from 'react-lottie';
import animationData from './data.json'

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <Lottie options={defaultOptions}
              height={400}
              width={400} />
  }
}
