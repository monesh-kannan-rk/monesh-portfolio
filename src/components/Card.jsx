import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

import DevAnimation from '../assets/lotties/dev.json'
export default function Card() {
  return (
    <div>
        <div>
        <Player
          src={DevAnimation}
          className = "lottie_dev"
          loop
          autoplay
        />
        </div>
    </div>
  )
}
