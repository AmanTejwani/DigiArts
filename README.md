# DigiArts
Digital Assests (NFT's) Marketplace 

DigiArts is a digital arts NFT marketplace built on the Ethereum blockchain. It allows users to mint, buy, and sell digital art as NFTs.

Tools Required
Ganache: A local blockchain development environment.
Truffle: A development framework for Ethereum smart contracts.
Metamask: A web3 wallet.
Framework
React.js: A JavaScript framework for building user interfaces.
Web3.js: A JavaScript library for interacting with the Ethereum blockchain.
Solidity: A programming language for writing smart contracts.
Tailwind.css: A utility-first CSS framework.
APIs
Infura IPFS storage api access: An API for storing and retrieving files on IPFS.
To Run
Install the required tools globally and set up Metamask.
Clone the repo.
Run the following command:
npm i -f

Code snippet

4. Add the following environment variables to `.env`:

Use code with caution. Learn more
PROJECT_ID=
API_KEY_SECRET=
HOST=
PORT=

Code snippet

5. To set up a local blockchain chain, run:

Use code with caution. Learn more
ganache-cli -d

Code snippet

6. To deploy the smart contract, run:

Use code with caution. Learn more
truffle migrate

Code snippet

7. Run the development server:

Use code with caution. Learn more
npm start

Code snippet

8. Copy 3-4 local accounts from Ganache and add them to Metamask.
9. You can now mint NFTs, update the price of minted NFTs, and purchase NFTs.

## Enjoy!
