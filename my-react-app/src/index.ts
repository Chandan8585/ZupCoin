import { http, createPublicClient } from 'viem';
import { goerli } from 'viem/chains';
import { wagmiContract } from './contract';
import { wagmiPresale } from './contract';

const client = createPublicClient({
  chain: goerli,
  transport: http(),
});

const address = '0xd2D8b032B638BBC61Ec9626E5fcbBcC232afE14f';

// Note: this is a naive example – you should probably use multicall for these
// types of batched reads instead.
const [totalSupply, symbol, name, balanceOf, currentSale] = await Promise.all([
  client.readContract({
    ...wagmiContract,
    functionName: 'totalSupply',
  }),
  client.readContract({
    ...wagmiContract,
    functionName: 'symbol',
  }),
  client.readContract({
    ...wagmiContract,
    functionName: 'name',
  }),
  client.readContract({
    ...wagmiContract,
    functionName: 'balanceOf',
    args: [address],
  }),
  client.readContract({
    ...wagmiPresale,
    functionName: 'currentSale',
  }),
]);

export default [
  `Contract Address: ${wagmiContract.address}`,
  `Total Supply: ${totalSupply}`,
  `Symbol: ${symbol}`,
  `Name: ${name}`,
  `Balance: ${balanceOf}`,
  `Stage: ${currentSale}`,
];


