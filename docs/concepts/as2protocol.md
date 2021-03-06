# 

\[\[Enhanced AS2 Protocol\]\]

# Token Object Encapsulation

MIME object encapsulation. For transmission of sensitive data, it is
essential that appropriate security services, such as authentication,
privacy and/or non-repudiation be provided.

# The Secure Transmission Loop

In the "secure transmission loop" for EDI/EC, one organization sends a
signed and encrypted EDI/EC interchange to another organization and
requests a signed receipt, and later the receiving organization sends
this signed receipt back to the sending organization. In other words,
the following transpires:

    o  The organization sending EDI/EC data signs and encrypts the
       data using S/MIME.  In addition, the message will request that
       a signed receipt be returned to the sender.  To support NRR,
       the original sender retains records of the message, message-ID,
       and digest (MIC) value.

    o  The receiving organization decrypts the message and verifies
       the signature, resulting in verified integrity of the data and
       authenticity of the sender.

    o  The receiving organization then returns a signed receipt using
       the HTTP reply body or a separate HTTP POST operation to the
       sending organization in the form of a signed message
       disposition notification.  This signed receipt will contain the
       hash of the received message, allowing the original sender to
       have evidence that the received message was authenticated
       and/or decrypted properly by the receiver.

## Definition of Receipts

    The term used for both the functional activity and the message for
    acknowledging delivery of an EDI/EC interchange is "receipt" or
    "signed receipt".  The first term is used if the acknowledgment is
    for an interchange resulting in a receipt that is NOT signed.  The
    second term is used if the acknowledgement is for an interchange
    resulting in a receipt that IS signed.

\=== NRR refers to a legal event that occurs only when the original
sender of an interchange has verified the signed receipt coming back
from recipient of the message, and has verified that the returned MIC
value inside the MDN matches the previously recorded value for the
original message ===

    The term non-repudiation of receipt (NRR) is often used in
    combination with receipts.  NRR refers to a legal event that occurs
    only when the original sender of an interchange has verified the
    signed receipt coming back from recipient of the message, and has
    verified that the returned MIC value inside the MDN matches the
    previously recorded value for the original message.

    NRR is best established when both the original message and the
    receipt make use of digital signatures.  See the Security
    Considerations section for some cautions regarding NRR.

## Structure of Messages

    Encryption, signature
       -RFC2616/2045
         -RFC3851 (application/pkcs7-mime)
           -RFC1847 (multipart/signed)(encrypted)
             -RFC1767/RFC3023  (application/EDIxxxx or /xml)(encrypted)
             -RFC3851 (application/pkcs7-signature)(encrypted)

    MDN over HTTP, signature
       -RFC2616/2045
         -RFC1847 (multipart/signed)
          -RFC3798 (message/disposition-notification)
          -RFC3851 (application/pkcs7-signature)

### Supported MIME Content

    Content-type: multipart/signed
    Content-Type: multipart/report
    Content-type: message/disposition-notification
    Content-Type: application/PKCS7-signature
    Content-Type: application/PKCS7-mime
    Content-Type: application/EDI-X12
    Content-Type: application/EDIFACT
    Content-Type: application/edi-consent
    Content-Type: application/XML

## EDIFACT Specification

## Enhancements

## References

    https://tools.ietf.org/html/rfc1767
    https://tools.ietf.org/html/rfc4021
    https://tools.ietf.org/html/rfc2156
    https://tools.ietf.org/html/rfc2822
    https://tools.ietf.org/html/rfc5322
