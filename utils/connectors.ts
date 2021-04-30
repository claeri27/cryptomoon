import { InjectedConnector } from '@web3-react/injected-connector'

export const metamask = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 100, 128, 137, 43114, 1666600000],
})
