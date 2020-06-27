# Token Mechanics 

> Note: BOL Token may be referenced in this documentation, please know that BOL is retired in favor of EDI. The mechanics (protocol interactions) are the same: the supply is different. 

EDI Token is an inter-network token used to redeem (by staking or hosting a node) block rewards. The Freight Trust Native Chain asset is not tradable, only $EDI is.

## Network Utility
**EDI** Token is the ERC-20 Token <br>
**wEDI** is the *Wrapped* "Freight Trust Network" Native Asset <br>

<br>

**EDI** Contract Address:[0x79c5a1ae586322a07bfb60be36e1b31ce8c84a1e](https://etherscan.io/token/0x79c5a1ae586322a07bfb60be36e1b31ce8c84a1e)<br>
**Staking Distribution Address**:[0x936e3DB8a488ED3f45e1202a952Bf85724220AbB](#)<br>
**Team Wallet Address**:[0x5441088B4d47F88836cfb911974F41c5C45725E7](#)<br>

### Use Case Overview
- Transactions (EDI transaction sets)
- Wallet Staking
	- 3rd Party Service Provider (To Customers to submit Transactions)
	- Direct end-user
- Node Hosting
	- Master Nodes
	- Side Chains
	- Token Bridge


# Token Design
EDI Token is designed to enable our blockchain network to operate within the confines of our rulebook. wEDI is the *Native* asset whereas EDI is the *ERC-20* asset. 

> **xEDI** is not a tradable asset, **EDI** is the tradable asset.

We make the following assumptions: <br>
Blocks Per Year: 3,155,695.2 [b] <br>
Size of EDI Transaction: 1,136 (in bytes) [s] <br>
Transaction Cost (in wei): 77,248 [sTX] <br>
Non-Zero cost of Transaction (GxDataNonZero): 68 [zTX] <br>
Transaction Min. Cost (GxminTransaction): 21,000 [mTX] <br>
Gas Limit per Block (0xa00000): 10,485,760 [gBlock] <br>
<br>
We can then calculate how many transactions can be proccessed per block at maximum via:
<br>
[gBlock] / [sTX]<br>
(10,485,760)/(77,248) = 135.741 EDI Transactions per Block<br>


## Supply

- Maximum Supply: 611,029,679
- Circulating Supply: 428,358,825
- Initial Supply: 151,113,902

### EDI Transaction

!!! note This is a sample EDI Transaction for 211 Transaction Set (Motor Carrier Bill of Lading), contract interaction would be parsed differently to interact with the NFT Protocol


```
ISA*01*0000000000*01*0000000000*ZZ*ABCDEFGHIJKLMNO*ZZ*123456789012345*101127*1719*U*00400*000003438*0*P*>
GS*BL*004999999*UPGF*20000817*2119*32*X*004010
ST*211*320001
BOL*UPGF*CC*939587*20000817**219029053**S**CC
B2A*00
L11*939587*BM
G62*10*20000817
AT5*NC
N1*SH*ABC, INC.*ZZ*0899
N2*DIVISION OF XYZ CORP
N3*320 N FOURTH ST
N4*TIPP CITY*OH*45371*US
N1*CN*HAPPY TOYS DIST*ZZ*0010
N3*1103 W. GEORGE RD.
N4*TIFTON*GA*31794*US
N1*BT*HAPPY TOYS INC
N3*P.O. BOX 1434
N4*ST. PAUL*MN*55450*US
AT1*1
AT4*BAGS NOI ACT SUB 3 ITM 171 DEC DEN 4
AT2*130*CTN*G*L*515****18764504*150
SPO*0030-9242460-0556**CT*130*L*515
SPO*0030-9242461-0560**CT*73*L*313
AT1*2
AT4*LIT FIX,NOI,SUB 3 ITM 171 DEC DEN 12
AT2*20*CTN*G*L*92****10981004*70
AT1*3
AT4*GIFTSET ACT SUB 3 ITM 171 DEC DEN 4
AT2*9*CTN*G*L*68****18764504*150
SPO*0030-9242460-0556*030*CT*53*L*221
AT1*4
AT4*WALL DECOR,NOI, ITM 171 ACT SUB 7 DEC DEN 12
AT2*4*CTN*G*L*32****05629007*92.5
AT1*5
AT4*LAMP NOI SB 2 ITM 171 DEC DEN 4
AT2*40*CTN*G*L*121****10940003*125
SE*34*320001
GE*1*32
IEA*1*000000001
```

## $EDI & $xEDI


!!! warning "contract address for $EDI: 0x79c5a1ae586322a07bfb60be36e1b31ce8c84a1e"

> for more contract addresses see the [contract registry](#)


**$EDI** is our ERC-20 token that is *tradeable*
<br>
**$xEDI** is a unit value that quantifies the work that contracts, addresses, and applications can do on the Freight Trust Network. This asset is *not tradable*
<br>
**xEDI** is similar to 'Gas' for Ethereum.
So think of it the same way as Gas Price multiplied by Gas Limit gives you your transaction cost.
Keeps transactions from being too expensive by separating transaction cost from the cost of EDI.

### PEM
Parametric Exchange Mechanism is our *fixed purchase price* from fiat into tokens. 

To understand how PEM works here is an example transaction set:
price of EDI (in USD): 0.05 <br>
PEM Value: 1.6<br>
Transaction Price: 44,000<br>
Transaction Limit: 8<br>
Transaction Cost: .00352<br>
EDI Amount: 32<br>
EDI Left: 31.99648<br>
EDI Retained: 15.99824<br>
<br>
<br>
| Function                        | Value     |
|---------------------------------|-----------|
| PEM Value                       | 1\.6      |
| Transaction Price \(in wei\)    | 44,000    |
| Transaction Limit \(in gwei\) 8 | 8         |
| Transaction Cost \(in xEDI\)    | \.00352   |
| EDI Amount                      | 32        |
| EDI Left                        | 31\.99648 |
| EDI Retained                    | 15\.99824 |
<br>
Where EDI Amount is the value of $1.60 USD worth of EDI Tokens. EDI Retained is how much you are left after the transaction is done (returned to your wallet). Please note: this is our own fiat mechanism: when you buy from our online store you are buying from the market. You can avoid using this mechanism with buying $EDI from an exchange.
<br>

### Registering Your Wallet

!!! warning DApp Connection Bridge Finalized by mid-April 2020. For the mean time registration is involved by providing both wallet addresses to [support@freight.zendesk.com](mailto:support@freight.zendesk.com)

<br>

[![](https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgYXV0b251bWJlclxuICAgICRFREktPj5QRU06IFJlZy4gRURJL3dFREkgV2FsbGV0XG4gICAgJEVESS0-PlBFTTogRGVwb3NpdCBFRElcbiAgICBOb3RlIHJpZ2h0IG9mIFBFTTogd0VESSBpcyBOYXRpdmUgVG9rZW5cbiAgICBQRU0tPj4kd0VESTogSW52b2tlIFdpdGhkcmF3IHdFRElcbiAgICAgICAgbG9vcCBWYWxpZGF0aW9uXG4gICAgICAgICR3RURJLT4-JHdFREk6IERlcG9zaXQgb250byBXYWxsZXRcbiAgICAgICAgZW5kXG4gICAgJHdFREktPj5QRU06IFJldHVybiB1bnVzZWQgJEVESVxuICAgIFBFTS0-PiRFREk6IFVudXNlZCBFREkgUmVmdW5kZWQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgYXV0b251bWJlclxuICAgICRFREktPj5QRU06IFJlZy4gRURJL3dFREkgV2FsbGV0XG4gICAgJEVESS0-PlBFTTogRGVwb3NpdCBFRElcbiAgICBOb3RlIHJpZ2h0IG9mIFBFTTogd0VESSBpcyBOYXRpdmUgVG9rZW5cbiAgICBQRU0tPj4kd0VESTogSW52b2tlIFdpdGhkcmF3IHdFRElcbiAgICAgICAgbG9vcCBWYWxpZGF0aW9uXG4gICAgICAgICR3RURJLT4-JHdFREk6IERlcG9zaXQgb250byBXYWxsZXRcbiAgICAgICAgZW5kXG4gICAgJHdFREktPj5QRU06IFJldHVybiB1bnVzZWQgJEVESVxuICAgIFBFTS0-PiRFREk6IFVudXNlZCBFREkgUmVmdW5kZWQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

```
sequenceDiagram
    autonumber
    $EDI->>PEM: Reg. EDI/wEDI Wallet
    $EDI->>PEM: Deposit EDI
    Note right of PEM: wEDI is Native Token
    PEM->>$xEDI: Invoke Withdraw wEDI
        loop Validation
        $xEDI->>$xEDI: Deposit onto Wallet
        end
    $xEDI->>PEM: Return unused $EDI
    PEM->>$EDI: Unused EDI Refunded
```
#### EDI to xEDI

$EDI is the ERC-20 Token Asset. We use $EDI and a fixed price of $xEDI to determine how much $EDI you need to get 1 $xEDI. <br>

For example:
$EDI is trading at $0.05 cents USD
The fixed exchange rate, per [**PEM**](#) is currently set to $1.50 USD.
You would need to buy 30 $EDI tokens to get 1 $xEDI. 



## Utility Diagram
<br>

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cdEVESSBUb2tlbiA8fC0tIFRyYW5zYWN0aW9uc1xuXHRFREkgVG9rZW4gPHwtLSBTdGFraW5nXG5cdEVESSBUb2tlbiA8fC0tIE5vZGVzXG5cdEVESSBUb2tlbiA6IEVSQy0yMFxuXHRFREkgVG9rZW46IEZ1bmdpYmxlXG5cdGNsYXNzIFRyYW5zYWN0aW9uc3tcblx0XHQrV3JhcHBlZEVESVxuXHRcdCtOYXRpdmUgTmV0d29ya1xuXHRcdCtUaW1lTG9ja1xuXHR9XG5cdGNsYXNzIFN0YWtpbmd7XG5cdFx0K1RpbWUgUGVyaW9kKDE0KVxuXHRcdCtEaXN0cmlidXRpb24oMTQpXG5cdH1cblx0Y2xhc3MgTm9kZXN7XG5cdFx0K1RpbWVQZXJpb2QoMjgpXG5cdFx0K0Rpc3RyaWJ1dGlvbigyOClcblx0fVxuXHRcdFx0XHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cdEVESSBUb2tlbiA8fC0tIFRyYW5zYWN0aW9uc1xuXHRFREkgVG9rZW4gPHwtLSBTdGFraW5nXG5cdEVESSBUb2tlbiA8fC0tIE5vZGVzXG5cdEVESSBUb2tlbiA6IEVSQy0yMFxuXHRFREkgVG9rZW46IEZ1bmdpYmxlXG5cdGNsYXNzIFRyYW5zYWN0aW9uc3tcblx0XHQrV3JhcHBlZEVESVxuXHRcdCtOYXRpdmUgTmV0d29ya1xuXHRcdCtUaW1lTG9ja1xuXHR9XG5cdGNsYXNzIFN0YWtpbmd7XG5cdFx0K1RpbWUgUGVyaW9kKDE0KVxuXHRcdCtEaXN0cmlidXRpb24oMTQpXG5cdH1cblx0Y2xhc3MgTm9kZXN7XG5cdFx0K1RpbWVQZXJpb2QoMjgpXG5cdFx0K0Rpc3RyaWJ1dGlvbigyOClcblx0fVxuXHRcdFx0XHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)


## Smart Contract Instruments Design

**BOL Protocol Design** <br>
<img src="https://freight-chain.github.io/docs/diagrams/instruments.svg"  alt="Smart Contract Instrument UML" align="center" width="80%" />

> [link to image](https://freight-chain.github.io/docs/diagrams/instruments.svg)

<br>
<img src="https://freight-chain.github.io/docs/diagrams/instrument-network.svg"  alt="Smart Contract Instrument Network UML" align="center" width="80%" />

> [link to image](https://freight-chain.github.io/docs/diagrams/instrument-network.svg)

## Staking
See [RFC-5](#)

## Validators / Network Node Operators 

> The terminology is interchangable with the concept of *master nodes*.

See [RFC-6](#)

<img src="https://freight-chain.github.io/docs/diagrams/master-node-contracts.svg"  alt="Validator Node Network DApp UML" align="center" width="50%" />

<br>