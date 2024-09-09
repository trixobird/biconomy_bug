import { createSmartAccountClient } from "@biconomy/account";
import { ethers } from 'ethers';


const test = async () => {

  const smartAccount = await createSmartAccountClient({
    signer: new ethers.Wallet('privateKey', new ethers.JsonRpcProvider('rpcUrl')),
    bundlerUrl: "", // From dashboard.biconomy.io
    paymasterUrl: "", // From dashboard.biconomy.io
  });

  const { wait } = await smartAccount.sendTransaction({ to: "0x...", value: 1 });

  const {
    receipt: { transactionHash },
    success,
  } = await wait();
}
