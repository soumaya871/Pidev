<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<h1 align="center">Bill</h1>
<hr>

<a href="/SpringMVC/servlet/exportpdf">Export PDF</a>

<table  align="center">
	<tr>
	   
	
		<th>Description</th>
		<th>Quantite</th>
		<th> Prix Unitaire </th>
		<th>Prix Tva </th>
		<th>Prix Totale</th>
	</tr>
	<c:forEach items="${T_BILLS}" var="bill">
		<tr>
			
			<td>${bill.quantite}</td>
			<td>${bill.prixuni}</td>
			<td>${bill.prixTva}</td>
			<td>${bill.prixTot}</td>
		</tr>
	</c:forEach>
</table>