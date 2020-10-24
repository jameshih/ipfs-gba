pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC721.sol";

contract Factory is Ownable {
    event CreateToken(
        string indexed name,
        string indexed symbol,
        address indexed token_address
    );

    function createToken(
        string calldata name,
        string calldata symbol,
        string calldata ipfs_hash
    ) external {
        ERC721 token = new ERC721(name, symbol, ipfs_hash);
        CreateToken(name, symbol, address(token));
    }
}
