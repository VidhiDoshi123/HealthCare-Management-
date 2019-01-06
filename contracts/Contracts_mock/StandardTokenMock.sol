pragma solidity 0.5.0;

import "../StandardToken.sol";


contract StandardTokenMock is StandardToken {

    constructor(address initialAccount, uint256 initialBalance) public {
        balances[initialAccount] = initialBalance;
        totalSupply_ = initialBalance;
    }

}
