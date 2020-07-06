# Imported ABNF Tokens

   The formal definition of these header fields is as follows:

     entity-headers := [ content CRLF ]
                       [ encoding CRLF ]
                       [ id CRLF ]
                       [ description CRLF ]
                       *( MIME-extension-field CRLF )

     MIME-message-headers := entity-headers
                             fields
                             version CRLF
                             ; The ordering of the header
                             ; fields implied by this BNF
                             ; definition should be ignored.

     MIME-part-headers := entity-headers
                          [ fields ]
                          ; Any field not beginning with
                          ; "content-" can have no defined
                          ; meaning and may be ignored.
                          ; The ordering of the header
                          ; fields implied by this BNF
                          ; definition should be ignored.

     version := "MIME-Version" ":" 1*DIGIT "." 1*DIGIT


## ABNF Tokens

   The following tokens are imported from other RFCs as noted.  Those
   RFCs should be considered definitive.

   The following tokens are imported from [RFC5321]:

   o  "local-part" (implementation warning: this permits quoted strings)

   o  "sub-domain"

   The following tokens are imported from [RFC5322]:

   o  "field-name" (name of a header field) [RFC5322]

   o  "dot-atom-text" (in the local-part of an email address) [RFC5322]

  The following tokens are imported from [RFC2045]:

   o  "qp-section" (a single line of quoted-printable-encoded text) [RFC2045]

   ABNF

   dkim-quoted-printable =  *(FWS / hex-octet / dkim-safe-char)
                               ; hex-octet is from RFC2045
   dkim-safe-char        =  %x21-3A / %x3C / %x3E-7E
                               ; '!' - ':', '<', '>' - '~'

   tag-list  =  tag-spec *( ";" tag-spec ) [ ";" ]
   tag-spec  =  [FWS] tag-name [FWS] "=" [FWS] tag-value [FWS]
   tag-name  =  ALPHA *ALNUMPUNC
   tag-value =  [ tval *( 1*(WSP / FWS) tval ) ]
                     ; Prohibits WSP and FWS at beginning and end
   tval      =  1*VALCHAR
   VALCHAR   =  %x21-3A / %x3C-7E
                     ; EXCLAMATION to TILDE except SEMICOLON
   ALNUMPUNC =  ALPHA / DIGIT / "_"
                              

### Whitespace

   There are three forms of whitespace:

   o  WSP represents simple whitespace, i.e., a space or a tab character
      (formal definition in [RFC5234]).

   o  LWSP is linear whitespace, defined as WSP plus CRLF (formal
      definition in [RFC5234]).

   o  FWS is folding whitespace.  It allows multiple lines separated by
      CRLF followed by at least one whitespace, to be joined.

   The formal ABNF for these are (WSP and LWSP are given for information
   only):

   WSP =   SP / HTAB
   LWSP =  *(WSP / CRLF WSP)
   FWS =   [*WSP CRLF] 1*WSP

