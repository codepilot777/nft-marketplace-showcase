import React from 'react'
import { Download, Features, SectionWrapper } from './components'

import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace"
        showBtn
        mockUpImg={assets.homeHero}
        banner="banner"
      />
    </>
  )
  }

export default App