# Transaction Envelope

** draft protocol v2 ** 


## Header
* Version
     version := "MIME-Version" ":" 1*DIGIT "." 1*DIGIT
* Content-type:
     Content-type: text/plain; charset=us-ascii (Plain text)

     Content-type: text/plain; charset="us-ascii"
* Content-Transfer-Encoding
     encoding := "Content-Transfer-Encoding" ":" mechanism

     mechanism := "7bit" / "8bit" / "binary" /
                  "quoted-printable" / "base64" /
                  ietf-token / x-token


## Content Type

Content-Type: header field value is defined as follows:

     content := "Content-Type" ":" type "/" subtype
                *(";" parameter)
                ; Matching of media type and subtype
                ; is ALWAYS case-insensitive.

     type := discrete-type / composite-type

     discrete-type := "text" / "image" / "audio" / "video" /
                      "application" / extension-token

     composite-type := "message" / "multipart" / extension-token

     extension-token := ietf-token / x-token

     ietf-token := <An extension token defined by a
                    standards-track RFC and registered
                    with IANA.>

     x-token := <The two characters "X-" or "x-" followed, with
                 no intervening white space, by any token>

     subtype := extension-token / iana-token

     iana-token := <A publicly-defined extension token. Tokens
                    of this form must be registered with IANA
                    as specified in RFC 2048.>

     parameter := attribute "=" value

     attribute := token
                  ; Matching of attributes
                  ; is ALWAYS case-insensitive.

     value := token / quoted-string

     token := 1*<any (US-ASCII) CHAR except SPACE, CTLs,
                 or tspecials>

     tspecials :=  "(" / ")" / "<" / ">" / "@" /
                   "," / ";" / ":" / "\" / <">
                   "/" / "[" / "]" / "?" / "="
                   ; Must be in quoted-string,
                   ; to use within parameter values


There are two acceptable mechanisms for defining new media subtypes:

    (1)   Private values (starting with "X-") may be defined
          bilaterally between two cooperating agents without
          outside registration or standardization. Such values
          cannot be registered or standardized.

    (2)   New standard values should be registered with IANA as
          described in RFC 2048.