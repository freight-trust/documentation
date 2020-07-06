

## JSON Schema Objects and Keywords

Object properties that are applied to the instance are called keywords, or schema keywords. Broadly speaking, keywords fall into one of four categories:

1. identifiers:
	control schema identification through setting the schema's canonical URI and/or changing how the base URI is determined
2. assertions:
	produce a boolean result when applied to an instance
3. annotations:
	attach information to an instance for application use
4. applicators:
	apply one or more subschemas to a particular location in the instance, and combine or modify their results
5. reserved locations:
	do not directly affect results, but reserve a place for a specific purpose to ensure interoperability


A schema vocabulary, or simply a vocabulary, is a set of keywords, their syntax, and their semantics. A **vocabulary is generally organized around a particular purpose**. Different uses of JSON Schema, such as **validation**, **hypermedia**, or user interface generation, will involve different sets of vocabularies.

 Since **vocabularies are identified by URIs in the meta-schema**, generic implementations can load extensions to support previously unknown vocabularies. While keywords can be supported outside of any vocabulary, there is no analogous mechanism to indicate individual keyword usage.

# Root Schema and Subschemas and Resources

A JSON Schema resource is a schema which is canonically identified by an absolute URI.

> ome keywords take schemas themselves, allowing JSON Schemas to be nested:
```json
{
    "title": "root",
    "items": {
        "title": "array item"
    }
}
```
                        
In this example document, the schema titled "array item" is a subschema, and the schema titled "root" is the root schema.

As with the root schema, a subschema is either an object or a boolean.

As discussed in section 8.2.2, a JSON Schema document can contain multiple JSON Schema resources. When used without qualification, the term "root schema" refers to the document's root schema. In some cases, resource root schemas are discussed. A resource's root schema is its top-level schema object, which would also be a document root schema if the resource were to be extracted to a standalone JSON Schema document.

### 


## Regular Expressions
Keywords MAY use regular expressions to express constraints, or constrain the instance value to be a regular expression. These regular expressions SHOULD be valid according to the regular expression dialect described in ECMA 262, section 15.10.1.

Furthermore, given the high disparity in regular expression constructs support, schema authors SHOULD limit themselves to the following regular expression tokens:

individual Unicode characters, as defined by the JSON specification;

 - simple character classes ([abc]), range character classes ([a-z]);
 - complemented character classes ([^abc], [^a-z]);
 - simple quantifiers: "+" (one or more), "*" (zero or more), "?" (zero or one), and their lazy versions ("+?", "*?", "??");
 - range quantifiers: "{x}" (exactly x occurrences), "{x,y}" (at least x, at most y, occurrences), {x,} (x occurrences or more), and their lazy versions;
 - the beginning-of-input ("^") and end-of-input ("$") anchors;
 - simple grouping ("(...)") and alternation ("|").

## Keyword Behaviors

Assertions validate that an instance satisfies constraints, producing a boolean result. 

Annotations attach information that applications may use in any way they see fit.

Applicators apply subschemas to parts of the instance and combine their results.

** Extension Keywords **  MAY define other behaviors for specialized purposes.

$id" core keyword and the "base" JSON Hyper-Schema keyword are examples of this sort of behavior.

## Default Behaviors 

. Keywords known to an implementation to have assertion or applicator behavior that depend on annotation results MUST then be treated as errors, unless an alternate implementation producing the same behavior is available. Keywords of this sort SHOULD describe reasonable alternate approaches when appropriate. This approach is demonstrated by the "additionalItems" and "additionalProperties

