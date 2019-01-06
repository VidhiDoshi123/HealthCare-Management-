pragma solidity 0.5.0;

import "./StandardToken.sol";
import "./Ownable.sol";


contract SpringToken is StandardToken, Ownable {

    string public constant name = "SpringToken"; // solium-disable-line uppercase
    string public constant symbol = "SPT"; // solium-disable-line uppercase
    uint8 public constant decimals = 18; // solium-disable-line uppercase

    uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

   
    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
        emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);
    }
}
