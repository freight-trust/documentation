# 

/\* Attribution-NonCommercial-NoDerivs 2.5 \*
<https://spdx.org/licenses/CC-BY-NC-ND-2.5.html> \* © 2020 FreightTrust
and Clearing Corporation \*/

``` markdown
(a)Negotiable Bills.—
(1) A bill of lading is negotiable if the bill—
(A) states that the goods are to be delivered to the order of a consignee; and
(B) does not contain on its face an agreement with the shipper that the bill is not negotiable.
(2) Inserting in a negotiable bill of lading the name of a person to be notified of the arrival of the goods—
(A) does not limit its negotiability; and
(B) is not notice to the purchaser of the goods of a right the named person has to the goods.

(b)Nonnegotiable Bills.—
(1) A bill of lading is nonnegotiable if the bill states that the goods are to be delivered to a consignee. The endorsement of a nonnegotiable bill does not—
(A) make the bill negotiable; or
(B) give the transferee any additional right.
(2) A common carrier issuing a nonnegotiable bill of lading must put “nonnegotiable” or “not negotiable” on the bill. This paragraph does not apply to an informal memorandum or acknowledgment.


source: (Pub. L. 103–272, § 1(e), July 5, 1994, 108 Stat. 1346.)
```

> Legacy Implementation Note (v1): Functional equivalence of possession
> is achieved when a reliable method is employed to establish control of
> that record by a person and to identify the person in control. The
> notion of control when used as a substitute for possession requires a
> reliable method for identifying the current party in control of a
> specific electronic record as the said notion typically focuses on the
> identity of the person entitled to enforce the rights embodied in the
> electronic transferable record. The method of identification may be
> accomplished through a closed system, or through an open system. Under
> the draft model law, the notion of original and uniqueness has been
> connected to control. Emphasis has been given to reliably ensure that
> the claim may be presented to the debtor only once.

**Documents capable for version 2 of protocol (legal parity is version
2, functional equivalence is version 1 or "legacy")**

An indicative list of transferable documents or instruments includes:
bills of exchange, cheques, promissory notes, consignment notes, bills
of lading, warehouse receipts, cargo insurance certificates and air
waybills.

# Negotiable Bills of Lading

A common carrier issuing a negotiable bill of lading has a lien on the
goods covered by the bill for--

(1) charges for storage, transportation, and delivery (including
demurrage and terminal charges), and expenses necessary to preserve the
goods or incidental to transporting the goods after the date of the
bill; and

(2) other charges for which the bill expressly specifies a lien is
claimed to the extent the charges are allowed by law and the agreement
between the consignor and carrier.

Substantive Qualities of a functional Instrument

# Mandatory fields for a bill of lading

``` javascript
Ship From name, address and zip code
Ship To name, address and zip code
Bill of Lading Number
Carrier Name
Carrier SCAC
Terms
Number of Packages
Weight Pallets/Slips (Y/N)
Handling Unit Quantity & Type Commodity Description
Trailer Loaded and Counted Indicator
Shipper and Carrier Signatures
```

## Why Legal Parity is better than Functional and legal equivalence

Visually replicate paper bills, preserving the often industry / custom
specific layout;

> b. Replicate the function of paper bills, including a party’s ability
> to issue, indorse, recut or surrender the e-bill;
> 
> c. Replicate the physical transfer of paper bills and, whilst all
> parties can view an e-bill (in copy form), the trading platform
> restricts access and indorsement to the current lawful holder (by way
> of fob and access code) as the e-bills securely move from one party to
> the next; and
> 
> d. Can be converted into paper bills, allowing them to be finally
> traded with parties which have not signed up to the ETS platform.
> However, it is notable that paper bills cannot be converted into
> e-bills since none of the ETS would be prepared to investigate and
> effectively warrant the provenance of paper bills and the physical
> cargo they represent.

## Replacement of a transferable document or instrument with an electronic transferable record

1.  An electronic transferable record may replace a transferable
    document or instrument if a reliable method for the change of medium
    is used.

2.  For the change of medium to take effect, a statement indicating a
    change of medium shall be inserted in the electronic transferable
    record.

3.  Upon issuance of the electronic transferable record in accordance
    with paragraphs 1 and 2, the transferable document or instrument
    shall be made inoperative and ceases to have any effect or validity.

4.  A change of medium in accordance with paragraphs 1 and 2 shall not
    affect the rights and obligations of the parties.

## Examining Warehouse Receipts - Electronic

> **7 U.S. Code§ 250.Warehouse receipts**
> 
> (Aug. 11, 1916, ch. 313, pt. C, § 11, as added Pub. L. 106—​472, title
> II, § 201, Nov. 9, 2000, 114 Stat. 2065.) (a)

At the request of the depositor of an agricultural product stored or
handled in a warehouse licensed under this chapter, the warehouse
operator shall issue a receipt to the depositor as prescribed by the
Secretary.

(b) **Actual storage required**

A receipt may not be issued under this section for an agricultural
product unless the agricultural product is actually stored in the
warehouse at the time of the issuance of the receipt.

(c) **Contents**

Each receipt issued for an agricultural product stored or handled in a
warehouse licensed under this chapter shall contain such information,
for each agricultural product covered by the receipt, as the Secretary
may require by regulation.

(d) Prohibition on additional receipts or other documents

(1) Receipts

While a receipt issued under this chapter is outstanding and uncanceled
by the warehouse operator, an additional receipt may not be issued for
the same agricultural product (or any portion of the same agricultural
product) represented by the outstanding receipt, except as authorized by
the Secretary.

(2) Other documents

If a document is transferred under this section, no duplicate document
in any form may be transferred by any person with respect to the same
agricultural product represented by the document, except as authorized
by the Secretary.

(e) Electronic receipts and electronic documentsExcept as provided in
section 242(h)(2) of this title, notwithstanding any other provision of
Federal or State law:

(1) In general

The Secretary may promulgate regulations that authorize the issuance,
recording, and transfer of electronic receipts, and the transfer of
other electronic documents, in accordance with this subsection.

(2)**Electronic receipt or electronic document systems**

Electronic receipts may be issued, recorded, and transferred, and
electronic documents may be transferred, under this subsection with
respect to an agricultural product under, a system or systems maintained
in one or more locations and approved by the Secretary in accordance
with regulations issued under this chapter.

(3) Treatment of holder

Any person designated as the holder of an electronic receipt or other
electronic document issued or transferred under this chapter shall, for
the purpose of perfecting the security interest of the person under
Federal or State law and for all other purposes, be considered to be in
possession of the receipt or other electronic document.

(4) Nondiscrimination

An electronic receipt issued, or other electronic document transferred,
in accordance with this chapter shall not be denied legal effect,
validity, or enforceability on the ground that the information is
generated, sent, received, or stored by electronic or similar means.

(5) **Security interests**

If more than one security interest exists in the agricultural product
that is the subject of an electronic receipt or other electronic
document under this chapter, the priority of the security interest shall
be determined by the applicable Federal or State law.

(6) No electronic receipt required

A person shall not be required to issue in electronic form a receipt or
document with respect to an agricultural product.

(7) Option for non-federally licensed warehouse operators

Notwithstanding any other provision of this chapter, a warehouse
operator not licensed under this chapter may, at the option of the
warehouse operator and in accordance with regulations established by the
Secretary, issue electronic receipts and transfer other electronic
documents in accordance with this chapter.

(8) Application to State-licensed warehouse operatorsThis subsection
shall not apply to a warehouse operator that is licensed under State law
to store agricultural commodities in a warehouse in the State if the
warehouse operator elects--

(A) not to issue electronic receipts authorized under this subsection;
or

(B) to issue electronic receipts authorized under State law.

## Meeting MLETR Requirements

*\#*

> *Source: Dr. Miriam Goldby*

  - 10(1)(a): equivalence in terms of content (but see also Article
    6 — additional content not precluded — potential to increase
    functionality).

  - 10(1)(b)(i) Mechanism for precluding “double pending”: performance
    obligation must be singular.

  - 10(1)(b)(ii) Person to whom performance is due must be identifiable.

  - 10(1)(b)(iii) and 10(2): techniques to maintain integrity (any
    changes to the record must be identifiable).

(i) **Operational Rules**: framework governing operation of the
electronic system should be geared towards the achievement of desired
outcomes.

(ii)**Data Integrity**: system must incorporate techniques to protect
data from tampering and external attacks.

(iii) **Unauthorised access and use:** Who is permitted to enter data
and method for becoming a system user are relevant considerations, as
well as vulnerabilities to internal attacks.

(iv) **Security of hardware and software:** may bring into play worker
complacency.

(v) **Audit: system**may need to be audited prior to going live, and
regularly thereafter, to check for vulnerabilities.

(vi) **External Assessment and (vii) Industry standards**: International
Organisation for Standardisation (ISO) provides benchmarks against which
system may be assessed: Technology-specific standards, as well as
general Quality, Risk Management, Business Continuity and Security
Management Standards developed by ISO may apply.

# Key Takeaways

## Terms suggested for RuleBook

> Source: Miriam Goldby

**Regulations issued under Section 1(5) of COGSA 1992**

1.  Interpretation

(1) “Consignee” means the person entitled to delivery of the goods under
the contract of carriage.

(2) “Contract of carriage” a contract in which the carrier, against the
payment of freight, undertakes to carry goods by sea. Section 5(1) of
COGSA 1992 shall apply.

(3) “Contract particulars” means any information relating to the
contract of carriage or to the goods (including terms, notations,
signatures and endorsements) that is in an electronic transport record.

(4) “Controlling party” means the person that is entitled to exercise
the right of control.

(5) “Electronic communication” means information generated, sent,
received or stored by electronic, optical, digital or similar means with
the result that the information communicated is accessible so as to be
usable for subsequent reference.

(6) “Electronic transport record” means information in one or more
messages issued by electronic communication under a contract of carriage
by a carrier, including information logically associated with the
electronic transport record by attachments or otherwise linked to the
electronic transport record contemporaneously with or subsequent to its
issue by the carrier, so as to become part of the electronic transport
record, that:

(a) Evidences the carrier‟s or a performing party‟s receipt of goods
under a contract of carriage; and

(b) Evidences or contains a contract of carriage.

(7) “Exclusive Control” of an electronic transport record is obtained
where a reliable method is used to render such record unique.70

### The Main Elements needed to Establish Functional Instrumentization of BoLs

1.  Operational Ruleset

2.  Data Integrity (and continuity)

3.  Unauthorized Access and Use

4.  Security of Software and Hardware

5.  Auditing

6.  External assessments

7.  Regulatory Oversight and Compliance

# XML Generated BOL Interface

\#\#

``` 
    <?xml version="1.0" encoding="UTF-8"?>

    <xs:complexType name="DocumentIdentification">
    <xs:sequence>
      <xs:element name="Standard" type="xs:string"/>
      <xs:element name="TypeVersion" type="xs:string"/>
      <xs:element name="InstanceIdentifier" type="xs:string"/>
      <xs:element name="Type" type="xs:string"/>
      <xs:element name="MultipleType" type="xs:boolean" minOccurs="0"/>
      <xs:element name="CreationDateAndTime" type="xs:dateTime"/>
    </xs:sequence>
  </xs:complexType>


    <BillOfLading
     xmlns="urn:oasis:names:specification:ubl:schema:xsd:BillOfLading-2"
     xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
     xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">
     <cbc:UBLVersionID/>
     <cbc:CustomizationID/>
     <cbc:ID/>
     <cbc:CarrierAssignedID/>
     <cbc:UUID/>
     <cbc:IssueDate/>
     <cbc:IssueTime/>
     <cbc:Note/>
     <cbc:DocumentStatusCode/>
     <cbc:DeclaredCarriageValueAmount/>
     <cac:ConsignorParty/>
     <cac:CarrierParty/>
     <cac:FreightForwarderParty/>
     <cac:Shipment/>
     <cac:DocumentReference>
      <cbc:ID/>
     </cac:DocumentReference>
     <cac:Signature>
      <cbc:ID/>
     </cac:Signature>
     <cac:Signature>
      <cbc:ID/>
     </cac:Signature>


     <ary: ChainID>
     <ary: HashChainID>
     <ary: contractNameAdress>


    </BillOfLading>
```

## Warning

## The bar code symbology used must be the EAN.UCC-128.

## The Application Identifiers (AI’s) are not part of the actual data. The AI is only used at the point of scanning to determine data type and/or size for application system processing. If you choose to implement the bar coding of the BOL number and/or SCAC and Pro\# for a carrier, be sure that the carrier is aware of the above requirements.

Bills of Lading have 3 groups: Master, FTL and LTL

### LTL

## Rules of Use for the Standard Bill of Lading

*\#*

> source: VICS BOL Standard

The guidelines to the Bill of Lading are designed so that the U.S.
industry may benefit from a form

that is consistent and understandable. The standard VICS BOL is intended
for U.S. LTL and TL

ground transport. It is particularly critical that all businesses using
the form adhere to its design so

that the supply chain may take advantage of these benefits. Listed below
is additional detail

regarding the use of the standard Bill of Lading.

1.  Adjustments to the VICS Bill of Lading can be made based on the
    following guidelines:

The geographical placement of data and data descriptions must be kept
intact according to this

standard. This is important to ensure that all parties within the supply
chain will know where to

locate the specific information they need.

Each section or data description area may be modified to fit the supply
chain business

requirements as follows:

  - Spacing

  - Column width

  - Row height

  - Removal of the data lines in the Customer and Carrier Information
    sections when either

the form or data is computer printed.

  - When the form is loaded into a software program, all sections shall
    be clearly identified

and the appropriate form lines and headings must be present.

  - To support North America cross boarder ground shipments, the section
    headings can be

modified to include bilingual wording.

<div class="note">

If cube information is being provided, the cube data column should be
inserted between

</div>

the Weight and Pallet/Slip column in the Customer Order Section.

1.  The following data must be 12-point Bold:

a) Bill of Lading number c) Ship to Location number

b) SCAC/Pro number d) Customer Order Number

When printing processes do not allow for variances in point size and
bolding, the above data

must be displayed with adequate spacing and high quality printing to
support ease of recognition

and data entry by the carriers. The CID number shall be in 10-point and
bolded. All other data

input items may be in a 10-point or smaller (See Section I Page 3 & 4 on
legal statements), no

bolding.

1.  Printing: The standard Bill of Lading may be duplicated and printed
    in multiple part forms by

any printing company or shipper. If the Supplement page is used, the
best practice has been to

print the Supplement page(s) first, then print the front Bill of Lading
page with the Grand Totals

last. The Bill of Lading page must then be placed in front of the
Supplement page(s).

1.  Pagination: In general, each bill of lading (including any
    supplement pages) and attachments are

considered separate documents. For example:

a) BOL with 3 supplement pages:

BOL = page 1, Supplement = pages 2, 3 and 4

b) Master BOL with 2 underlying BOL’s; underlying BOL’s with 2
supplement pages:

Master BOL = page 1, First underlying BOL = page 1, supplement pages =
2, 3

Second underlying BOL = page 1, supplement pages =2, 3.

c) BOL with an attachment (e.g., packing list and /or shipping
manifest):

BOL = page 1, attachment one = pages 1, 2…​, attachment two = pages 1,
2…​.

IV. Rules of Use for the Standard Bill of Lading

14

1.  The Bill of Lading is not to be used as a packing list; the packing
    list is to be on a separate

document. In addition, the following items are not part of the Bill of
Lading and shall not be

included on the Bill of Lading. However, these documents are considered
as potential

attachments to the Bill of Lading.

  - Packing List line item information.

  - Shipping Manifest - The Shipping Manifest is a document generated by
    the shipper for a

customer pertaining to store shipments that are shipped to a customer
specified

intermediate location (i.e., distribution center, consolidator) with the
individual cartons

marked for specific store locations. The manifest contains store level
detail that

typically includes store location numbers, store addresses, customer
order numbers,

number of cartons per order per store and weight/cube totals.

  - Hazardous Item List (See Section VII. Hazardous Materials
    Regulations for

instructions)

See Appendix E for recommended format, detailed data content explanation
and examples.

1.  The Canadian PARS sticker for customs belongs on the freight
    invoice, not on the Bill of

Lading.

1.  The information conveyed through EDI (e.g. EDI 856, 204, 211, 214)
    shall be consistent with

the information on the paper Bill of Lading. This in no way implies that
all information

conveyed through any one EDI document will map one-to- one to the paper
Bill of Lading.

1.  When using the Supplement Page to list customer order number and
    commodity information,

state “See attached Bill of Lading Supplement” in the body of the first
page and begin listing the

information on the supplement page. Only the grand total of the cartons
and weight for the

shipment will be detailed on the first page.

1.  No Bill of Lading information shall be placed on the back of the
    Bill of Lading page. This area

is reserved for the terms and conditions of the contract on the
preprinted forms.

1.  Additional printing considerations and options.

A. Data tags can be used in the Customer Order Information Section to
identify multiple data

elements that may be required by the consignee

Use of Master Bill of Lading

16

A Master Bill of Lading is created for three shipment scenarios:

1.  Consolidation shipments

2.  Invoice per Bill of Lading per customer order

3.  Truckload shipments with multiple stops

For these scenarios, the purpose of the Master Bill of Lading is to tie
the underlying Bills of Lading together into one shipment for freight
rating and billing purposes. The standard Bill of Lading is used as a
Master Bill of Lading by checking the “Master Bill of Lading” indicator
box. The underlying Bill of Lading numbers shall be referenced in the
Special Instructions field on the Master Bill of Lading. The Master Bill
of Lading number shall be referenced in the Special Instructions field
on the underlying Bills of Lading. The development of the Supplement
Page to the Bill of Lading eliminates the use of a Master Bill of Lading
for the purpose of needing more lines to fit all the information on one
page (see section V) t

The Master Bill of Lading shall not be used for this purpose.

Often a Master Bill of Lading, with underlying Bills of Lading attached,
is used in conjunction with

the 856 Ship Notice Manifest and the 214 Carrier Shipment Status EDI
transaction sets. In this case,

the Master Bill of Lading number is the number that is transmitted on
the EDI transaction

sets representing that shipment. Do not transmit the underlying Bill of
Lading numbers as that

causes confusion as to which Bill of Lading number is the one to be
used.

The use of a Master Bill of Lading is a complex aspect of shipping that
may be better shown by

example.
