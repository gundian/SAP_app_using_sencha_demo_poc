1. Get all the Sales Orders
Call>>>>https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/SalesOrders
this will return orders in the following XML format

<entry>
	<id> https://sapes1.sapdevcenter.com:443/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/SalesOrders('0500000003') </id>
	<title type="text">SalesOrders('0500000003')</title>
	<updated>2014-02-13T17:11:46Z</updated>
	<category term="ZCD204_EPM_DEMO_SRV.SalesOrder" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"/>
	<link href="SalesOrders('0500000003')" rel="edit" title="SalesOrder"/>
	<link href="SalesOrders('0500000003')/BusinessPartner" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/BusinessPartner" type="application/atom+xml;type=entry" title="BusinessPartner"/>
	<link href="SalesOrders('0500000003')/SalesOrderItems" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/SalesOrderItems" type="application/atom+xml;type=feed" title="SalesOrderItems"/>
	<content type="application/xml">
		<m:properties>
			<d:SalesOrderID>0500000003</d:SalesOrderID>
			<d:NetSum>1181.00</d:NetSum>
			<d:Tax>0.00</d:Tax>
			<d:Currency>EUR</d:Currency>
			<d:ChangedAt>2013-11-24T08:00:00.0000000</d:ChangedAt>
			<d:Note>EPM DG: SO ID 0500000003 Deliver as fast as possible</d:Note>
			<d:CreatedAt>2013-11-24T08:00:00.0000000</d:CreatedAt>
			<d:TotalSum>1405.39</d:TotalSum>
			<d:Status>N</d:Status>
			<d:CustomerName>Asia High tech</d:CustomerName>
			<d:BusinessPartnerID>0100000006</d:BusinessPartnerID>
		</m:properties>
	</content>
</entry>

2. 

Header
https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/SalesOrders('0500000003')
<content type="application/xml">
<m:properties>
<d:SalesOrderID>0500000003</d:SalesOrderID>
<d:NetSum>1181.00</d:NetSum>
<d:Tax>0.00</d:Tax>
<d:Currency>EUR</d:Currency>
<d:ChangedAt>2013-11-24T08:00:00.0000000</d:ChangedAt>
<d:Note>EPM DG: SO ID 0500000003 Deliver as fast as possible</d:Note>
<d:CreatedAt>2013-11-24T08:00:00.0000000</d:CreatedAt>
<d:TotalSum>1405.39</d:TotalSum>
<d:Status>N</d:Status>
<d:CustomerName>Asia High tech</d:CustomerName>
<d:BusinessPartnerID>0100000006</d:BusinessPartnerID>
</m:properties>
</content>


Items
CALL >>>https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/SalesOrders('0500000003')?$expand=SalesOrderItems

here we need to pass the Order ID... we get multiple line items here

<content type="application/xml">
<m:properties>
<d:QuantityUnit>EA</d:QuantityUnit>
<d:Tax>13.68</d:Tax>
<d:NetSum>72.00</d:NetSum>
<d:TotalSum>85.68</d:TotalSum>
<d:ProductName>EPM DG: SO ID 0500000003 Item 0000000010</d:ProductName>
<d:ProductID>HT-1073</d:ProductID>
<d:Position>0000000010</d:Position>
<d:SalesOrderID>0500000003</d:SalesOrderID>
<d:Currency>EUR</d:Currency>
<d:Quantity>3.000</d:Quantity>
<d:DeliveryDate>2013-12-01T08:00:00.0000000</d:DeliveryDate>
</m:properties>
</content>


Get the Business Partner Details
https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners('0100000002')
<m:properties>
<d:BusinessPartnerID>0100000002</d:BusinessPartnerID>
<d:Role>01</d:Role>
<d:EmailAddress>maria.brown@delbont.com</d:EmailAddress>
<d:PhoneNumber>8</d:PhoneNumber>
<d:FaxNumber>0190666777</d:FaxNumber>
<d:WebAddress>http://www.delbont.com</d:WebAddress>
<d:CompanyName>DelBont Industries</d:CompanyName>
<d:LegalForm>Ltd.</d:LegalForm>
<d:CurrencyCode>EUR</d:CurrencyCode>
<d:City>Wilmington, Delaware</d:City>
<d:PostalCode>19899</d:PostalCode>
<d:Street>1 2346 King Street</d:Street>
<d:Building>1</d:Building>
<d:Country>US</d:Country>
<d:AddressType>02</d:AddressType>
<d:AddressValStartDate>2001-12-31T08:00:00.0000000</d:AddressValStartDate>
<d:AddressValEndDate>9997-12-30T08:00:00.0000000</d:AddressValEndDate>
<d:CreatedBy>0000000033</d:CreatedBy>
<d:CreatedAt>2013-11-24T13:24:37.0000000</d:CreatedAt>
<d:ChangedBy>0000000033</d:ChangedBy>
<d:ChangedAt>2014-02-13T12:26:19.1779610</d:ChangedAt>
</m:properties>


Get the Products (Material MAster)
https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/Products('HT-1073')
<m:properties>
<d:ProductID>HT-1073</d:ProductID>
<d:TypeCode>PR</d:TypeCode>
<d:Category>Graphic cards</d:Category>
<d:Name>Psimax</d:Name>
<d:Description>
PsimaX: High performance of thePsimax is matched by competitive features and extra horsepower to deliver barrier-free entertainment.
</d:Description>
<d:SupplierID>0100000038</d:SupplierID>
<d:SupplierName>Bionic Research Lab</d:SupplierName>
<d:TaxTarifCode>1</d:TaxTarifCode>
<d:MeasureUnit>EA</d:MeasureUnit>
<d:WeightMeasure>0.010</d:WeightMeasure>
<d:WeightUnit>KG</d:WeightUnit>
<d:Price>24.0000</d:Price>
<d:CurrencyCode>EUR</d:CurrencyCode>
<d:Width>0.150</d:Width>
<d:Depth>0.170</d:Depth>
<d:Height>0.040</d:Height>
<d:DimUnit>M</d:DimUnit>
<d:ProductPicUrl>/SAP/PUBLIC/BC/NWDEMO_MODEL/IMAGES/HT-1073.jpg</d:ProductPicUrl>
<d:ProductPicUrlMimeType>image/jpeg</d:ProductPicUrlMimeType>
</m:properties>



Get Business Partners
https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners
Get Sales Order by Business Partner
https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners('0100000000')/SalesOrders
