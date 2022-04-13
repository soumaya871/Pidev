package tn.esprit.spring.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.text.AttributeSet.ColorAttribute;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import com.itextpdf.kernel.color.Color;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;


import tn.esprit.spring.entity.Bill;
import tn.esprit.spring.entity.Order;
import tn.esprit.spring.entity.lignedecommande;
import tn.esprit.spring.repository.BillsRepository;
import tn.esprit.spring.repository.OrderRepository;
import tn.esprit.spring.repository.ligneCommandeRepository;

public class ExportPdf {

	public ExportPdf() {
		// TODO Auto-generated constructor stub
	}
	
	public static ByteArrayInputStream billsReport(Order order) throws MalformedURLException, IOException {
		
		Document document = new Document();
		ByteArrayOutputStream out = new ByteArrayOutputStream();

		try {

			PdfPTable table = new PdfPTable(4);
			table.setWidthPercentage(80);
			table.setWidths(new int[] { 4, 4, 4 ,4,});
			
		Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
	Paragraph paragraph = new Paragraph("FACTURE", headFont);
		paragraph.setAlignment(Element.ALIGN_CENTER);
      //     Phrase phrase = new Phrase ("Date:" + new Date());
			//  paragraph.setAlignment(Element.ALIGN_MIDDLE);
			    paragraph.setIndentationLeft(100);
			    paragraph.setIndentationRight(100);
			    paragraph.setSpacingAfter(50);
			   //document.add(Image.getInstance("C:\\Users\\Soumaya\\Pictures\\Saved Pictures\\logo.PNG"));
			PdfPCell hcell;
			
			
			
			
			hcell = new PdfPCell(new Phrase("Nom produit ", headFont));
			hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
			table.addCell(hcell);

			hcell = new PdfPCell(new Phrase("Quantite", headFont));
			hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
			table.addCell(hcell);
			
			hcell = new PdfPCell(new Phrase("Prix Unitaire", headFont));
			hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
			table.addCell(hcell);
			
		
			
			hcell = new PdfPCell(new Phrase("Prix Total", headFont));
			hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
			table.addCell(hcell);

			for (lignedecommande  ligne : order.getLignedecommandes()) {

				PdfPCell cell;

				cell = new PdfPCell(new Phrase(ligne.getProduct().getProduct_name()));
				cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
				cell.setHorizontalAlignment(Element.ALIGN_CENTER);
				table.addCell(cell);

				cell = new PdfPCell(new Phrase(String.valueOf(ligne.getQuantity())));
				cell.setPaddingLeft(5);
				cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
				cell.setHorizontalAlignment(Element.ALIGN_CENTER);
				table.addCell(cell);

				cell = new PdfPCell(new Phrase(String.valueOf(ligne.getProduct().getProduct_price())));
				cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
				cell.setHorizontalAlignment(Element.ALIGN_CENTER);
				cell.setPaddingRight(5);
				table.addCell(cell);
			
				
				
				cell = new PdfPCell(new Phrase(String.valueOf(ligne.getProduct().getProduct_price()*ligne.getQuantity())));
				cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
				cell.setHorizontalAlignment(Element.ALIGN_CENTER);
				cell.setPaddingRight(5);
				table.addCell(cell);
			}

			PdfWriter.getInstance(document, out);
			document.open();
			 boolean paragraph1 = document.add( new  Paragraph("FACTURE", headFont));
			// paragraph.setFont(FontFactory.getFont("Facture" ,"RED",20));
	//  document.add(new Paragraph(order.getDate()));
			  
	   
		//	document.add(new  Paragraph("FACTURE",headFont));
			 //  document.add(Image.getInstance("C:\\Users\\Soumaya\\Desktop\\logo.PNG"));
			 //document.add(new Paragraph (" Clien Name :",headFont));
	
			 document.add(new Paragraph(" Clien Name :" +order.getClient().getFirstName()+"    "+order.getClient().getLastName()));

			 document.add(new Paragraph( "Telephone  :  "+order.getClient().getPhoneNumber()));
			 document.add(new Paragraph( " Adresse :"+order.getClient().getAdress()));
			 document.add(new Paragraph("  "));
			 				 document.add(new Paragraph("---------------------------------------------------------------------------------------------------------------------------------"));
				 document.add(new Paragraph("  "));
				//    document.add(new Paragraph("  "));
			
			 
			 document.add(table);
             
		
			 document.add(new Paragraph("Telephone  :(+216) 70 318 700  "+" Adresse : Ariana Soghra /Tunis "));
			 document.add(new Paragraph("Fax :(+216) 70 318 700 "+" Code Postal :2081  "));
			 document.add(new Paragraph("Email :ConsommiToounsi.619@esprit.tn  "));


			document.close();

		} catch (DocumentException ex) {

		}

		return new ByteArrayInputStream(out.toByteArray());
	

	}}
