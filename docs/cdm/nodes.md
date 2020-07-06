
Signing vs. Sealing

   Signing is the process of affixing a digital signature to a message
   as a header field, such as when a DKIM-Signature (as in [RFC6376],
   Section 2.1), an AMS, or an AS is added.  Sealing is when an ADMD
   affixes a complete and valid ARC Set to a message to create or
   continue an Authenticated Received Chain.

Sealer

   A Sealer is an Internet Mail Handler that attaches a complete and
   valid ARC Set to a message.

   In general concept terms, a Sealer adds its testimony (assertion of
   authentication assessment) and proof of custody to the chain of
   custody.

Validator

   A Validator is an ARC-enabled Internet Mail Handler that evaluates an
   Authenticated Received Chain for validity and content.  The process
   of evaluation of the individual ARC Sets that compose an
   Authenticated Received Chain is described in Section 5.2.

   In general concept terms, a Validator inspects the chain of custody
   to determine the content and validity of individual evidence supplied
   by custodians.

Imported ABNF Tokens

   The following ABNF tokens are imported:

   o  tag-list ([RFC6376], Section 3.2)

   o  authres-payload ([RFC8601], Section 2.2)

   o  CFWS ([RFC5322], Section 3.2.2)