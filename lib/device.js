import {useState, useEffect} from 'react'
import {getSelectorsByUserAgent} from 'react-device-detect'

export function useDevice() {
  const [device, setDevice] = useState(false);

  useEffect(() => {
    if (process.browser) {
      // resolve by userAgent
      const selectors = getSelectorsByUserAgent(window.navigator.userAgent)
      setDevice(selectors)
    } else {
      // set ssr mode
      setDevice({isSSR: true})
    }
  }, [])

  return device;
}
