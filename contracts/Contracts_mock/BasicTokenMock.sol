pragma solidity 0.5.0;

import "../BasicToken.sol";


contract BasicTokenMock is BasicToken {

    constructor(address initialAccount, uint256 initialBalance) public {
        balances[initialAccount] = initialBalance;
        totalSupply_ = initialBalance;
    }

}
