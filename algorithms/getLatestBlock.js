// blockHash: sha1(“prevBlockHash, nonce, transactions”)
// nonce: The lowest integer for which the first four characters of blockHash are equal to 0000
// Transaction: [from, to, value] from >= value to be valid
// Blocksize: # of transactions

var CryptoJS = require("crypto-js");

function sha1(text) {
  const hash = CryptoJS.SHA1(text)
  return CryptoJS.enc.Hex.stringify(hash);
}

function getLatestBlock(startBalances, pendingTransactions, blockSize) {
    let blockChain = [];
    let prevHash = '0000000000000000000000000000000000000000';
    let N = pendingTransactions.length;


    for (var i = 0; i < N; i += blockSize) {
        let blockData = Array(3);
        blockData[0] = prevHash;
        let validTsx = [];

        for (var j = i; j < i + blockSize; j++) {
            let tsx = pendingTransactions[j];
            if (!tsx) break;

            let [from, to, val] = tsx;
            if (startBalances[from] >= val) {
                startBalances[from] -= val;
                startBalances[to] += val;
                validTsx.push(tsx);
            }
        }

        if (validTsx.length === 0) continue;

        blockData[2] = tsxToString(JSON.stringify(validTsx));
        let { blockHash, blockDataString } = getBlockHash(blockData);
        prevHash = blockHash;
        blockChain.push(blockHash + ', ' + blockDataString);
    }

    return blockChain[blockChain.length - 1];
}

function tsxToString (string) {
    for (var i = 1; i < string.length - 1; i++) {
        let left = parseInt(string[i - 1]);
        let right = parseInt(string[i + 1]);
        if ((left || left === 0) && (right || right === 0)) {
            string = string.slice(0, i + 1) + ' ' + string.slice(i + 1);
        }
        if (string[i - 1] === ']' && string[i + 1] === '[') {
            string = string.slice(0, i + 1) + ' ' + string.slice(i + 1);
        }
    }

    return string;
}

function getBlockHash(data) {
    let nonce = 0;
    let hash = '';
    let dataString = '';
    while(true) {
        data[1] = nonce;
        dataString = data.join(', ')
        hash = sha1(dataString);
        if (hash.slice(0, 4) === '0000') {
            console.log(dataString);
            return {
              blockHash: hash,
              blockDataString: dataString
            }
        }

        nonce += 1;
    }
}

let starting = [0, 7];
let transactions = [[1,0,4], [1,0,1], [1,0,2], [0,1,7]];
let blockSize = 3;

console.log(getLatestBlock(starting, transactions, blockSize))
