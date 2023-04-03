/* eslint-disable no-undef */
const DigiArtsNFT = artifacts.require('DigiArtsNFT');

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(DigiArtsNFT, 'DigiArts NFTs', 'DNNT', 10, accounts[1])
}
