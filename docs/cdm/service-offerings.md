

Converting To and From XML
Freight Trust uses XML as an intermediary format for data transformation and manipulation. The first step in most mapping projects is to convert the source file format (in this case X12) into XML, and the last step in most mapping projects is to convert XML into the destination format (in this case CSV).

Since translating to and from XML is such an important step in data transformation, Freight Trust includes many dedicated connectors for translating files to and from XML. This guide will use an X12 Connector and a CSV Connector. These connectors automatically convert their respective file formats into XML and vice versa. Using these connectors, both the source format (an X12 850 Purchase Order) and the destination format (a CSV file with the desired columns) can be modeled as XML.

Transforming XML
Once the source format and the destination format have both been modeled as XML, the task is to convert one XML structure into another. This is accomplished by the powerful XML Map Connector.

The XML Map Connector requires a sample Source File and Destination File, which represent the starting XML structure and ending XML structure respectively. After these have been specified, the XML Map Connector’s visual designer is populated with the two XML structures.

Inside the XML Map Connector’s visual designer, the elements from the source structure can be dragged and dropped onto the elements in the destination structure to create a mapping relationship between them. This mapping step requires an understanding of the data within the source file so that the appropriate elements are included in the output file.

The XML Map Connector includes value formatters, conditional logic, and even custom scripting to manipulate and compute data during the mapping process.

Once the mapping relationship has been created, the XML Map Connector can automatically convert any files that match the Source XML structure into a file with the Destination XML structure. In this example, this means that the XML model of an X12 850 document will automatically be converted into an XML model of a CSV file. The final step is to take this XML model of a CSV file and convert it to an actual CSV file, which is easily accomplished with the CSV Connector.

Flattening a Purchase Order
A specific conceptual challenge when mapping an 850 Purchase Order to CSV is the need to ‘flatten’ the Purchase Order. A single 850 document may contain multiple orders, and each order contains varying numbers of line items. CSV files, in contrast, have a static number of columns with which to store this data.

Since the number of CSV columns cannot expand to accommodate the varying number of orders in an 850, an 850 cannot be mapped to a single record (row) in a CSV file. Similarly, since the number of CSV columns cannot expand to accommodate the varying number of line items in an order, an order cannot be mapped to a single record (row) in a CSV file. Each record in the CSV must store the data for a single line item within an order, since a single line item can be represented as a static set of values regardless of the number of line items and orders in an 850. ‘Flattening’ an 850 refers to taking its multi-layered and variable structure and reducing it to a set of static line items.

The XML Map Connector uses the concept of a Foreach looping relationship to flatten structures during a mapping. In this case, a new CSV record should be created “for each” line item in the 850. Establishing this relationship within an XML Map Connector is simply a matter of using the visual designer to drag one element (the ‘PO1’ element that represents a line item) onto another element (the element that represents a CSV record/row). Flattening structures with the XML Map Connector is thus very easy, but does require an understanding of the source and destination XML structures so that the appropriate Foreach relationship is established.