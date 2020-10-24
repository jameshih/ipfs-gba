pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Store is Ownable {
    uint256 private _curve;
    IERC721 private _token;

    constructor(address token) public Ownable() {
        _curve = 0;
        _token = IERC721(token);
    }

    function getCurve() external view returns (uint256) {
        return _curve;
    }

    // function buy() external payable;

    // function sell() external payable;

    function getQauntity() external view returns (uint256) {
        return _token.balanceOf(owner());
    }
}
