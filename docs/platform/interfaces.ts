export interface EDI {
    DataElementDelimiter: string;
    SegmentDelimiter:     string;
    TA1:                  Ta1;
    ISA:                  Isa;
    Groups:               Group[];
    IEATrailers:          IeaTrailer[];
    Result:               Result;
}

export interface Group {
    Transactions: Transaction[];
    GETrailers:   GeTrailer[];
    GS:           Gs;
}

export interface GeTrailer {
    NumberOfIncludedSets_1: string;
    GroupControlNumber_2:   string;
}

export interface G {
    Time_5:                           string;
    ReceiverIDCode_3:                 string;
    CodeIdentifyingInformationType_1: string;
    VersionAndRelease_8:              string;
    SenderIDCode_2:                   string;
    Date_4:                           string;
    TransactionTypeCode_7:            string;
    GroupControlNumber_6:             string;
}

export interface Transaction {
}

export interface IeaTrailer {
    InterchangeControlNumber_2: string;
    NumberOfIncludedGroups_1:   string;
}

export interface Isa {
    InterchangeReceiverID_8:                  string;
    SenderIDQualifier_5:                      string;
    AcknowledgementRequested_14:              string;
    SecurityInformation_4:                    string;
    InterchangeDate_9:                        string;
    InterchangeControlStandardsIdentifier_11: string;
    ComponentElementSeparator_16:             string;
    SecurityInformationQualifier_3:           string;
    AuthorizationInformationQualifier_1:      string;
    InterchangeControlNumber_13:              string;
    InterchangeSenderID_6:                    string;
    UsageIndicator_15:                        string;
    ReceiverIDQualifier_7:                    string;
    InterchangeTime_10:                       string;
    AuthorizationInformation_2:               string;
    InterchangeControlVersionNumber_12:       string;
}

export interface Result {
    Status:    string;
    Details:   Detail[];
    LastIndex: number;
}

export interface Detail {
    Status:           string;
    Message:          string;
    SegmentId:        string;
    TransactionIndex: number;
    TransactionRef:   string;
    Value:            string;
    Index:            number;
    DataElementIndex: number;
}

export interface Ta1 {
    InterchangeDate_2:               string;
    InterchangeAcknowledgmentCode_4: string;
    InterchangeTime_3:               string;
    InterchangeControlNumber_1:      string;
    InterchangeNoteCode_5:           string;
}
