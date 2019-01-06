pragma solidity 0.5.0;

import "./Ownable.sol";
import "./ERC20Basic.sol";



contract TokenDestructible is Ownable {

    constructor() public payable { }

    /**
    * @notice Terminate contract and refund to owner
    * @param tokens List of addresses of ERC20 or ERC20Basic token contracts to
    refund.
    * @notice The called token contracts could try to re-enter this contract. Only
    supply token contracts you trust.
    */
    function destroy(address[] tokens) onlyOwner public {
        // Transfer tokens to owner
        for (uint256 i = 0; i < tokens.length; i++) {
            ERC20Basic token = ERC20Basic(tokens[i]);
            uint256 balance = token.balanceOf(this);
            token.transfer(owner, balance);
        }
        // Transfer Eth to owner and terminate contract
        selfdestruct(owner);
    }
}
