## AS2 Identifier
Your AS2 identifier is included in outgoing AS2 messages and identifies you as the sender; additionally incoming AS2 messages must be addressed to this identifier to be accepted by the application. AS2 identifiers have a few restrictions, for example they cannot include whitespace characters and they are case-sensitive. Other than this (and any further restrictions imposed by trading partners), AS2 identifiers can be any value so long as it is mutually agreed-upon.

### Private Certificate
Your private certificate is used for digital cryptography (decryption, digital signatures). The private certificate contains a private key that is paired with your public encryption key; when a trading partner uses your public encryption key to secure an AS2 message, it ensures that only you can decrypt the message (with the paired private key).

Freight Trust supports private certificates in PKCS#12 format (.pfx or .p12 files), and PEM-encoded public key certificates (.cer files).

Freight Trust includes a test pair of private and public key certificates (‘test.pfx’ and ‘test.cer’) that can be used to test the cryptographic aspects of AS2 (encryption, signatures) without needing to procure an external certificate pair. These certificates should not be used in live production transactions with a trading partner.

Common Name - The hostname of the server using the certificate; used in conjunction with the serial number to identify the certificate
Organization - The company or group to which the certificate belongs
File Name - The name of the certificate file (with .pfx extension); the corresponding public key certificate will have the same name with a .cer extension
Serial Number - A unique serial number that is used in conjunction with the common name to identify the certificate
Password - The password required to access the private key
Validity Period - Determines the expiration date of the certificate
Key Size - Whether to create a 512, 1024, or 2048-bit key
Signature Algorithm - The algorithm to use when applying a digital signature to the certificate, verifying its authenticity


## Required Configuration Settings
AS2 configuration details must be solicited from the trading partner. At a minimum, the details that the trading partner provides must include:

* AS2 identifier
* URL/endpoint where outgoing AS2 messages should be sent
* Public certificate/key for encryption




