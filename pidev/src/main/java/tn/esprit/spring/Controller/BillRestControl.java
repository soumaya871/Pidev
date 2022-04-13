	package tn.esprit.spring.Controller;

import java.io.ByteArrayInputStream;
import java.net.MalformedURLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import tn.esprit.spring.entity.Bill;
import tn.esprit.spring.entity.Order;
import tn.esprit.spring.repository.BillsRepository;
import tn.esprit.spring.service.IBillService;
import tn.esprit.spring.service.IOrderService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BillRestControl {
	@Autowired
	BillsRepository billsRepository;

	@Autowired
	IBillService ib;
	@Autowired
	IOrderService io;
	//affichage all order 
		//http://localhost:8081/SpringMVC/servlet/getbills
		@GetMapping("/getbills")
		public List<Bill> getAllbills() {
			return ib.retrieveAllBills();
		}
	
	/*{"date": "2015-01-22",
		"type": "automatique",
		"firstName": "affef",
		"lastName": "sellami",
		"prixuni": "5.0",
		 "prixtva": "19",
		"prixtot": "1000.0"}*/
		// http://localhost:8085/SpringMVC/servlet/retrieve-bill/{bill-id}
		@GetMapping("/retrieve-bill/{bill-id}")
		@ResponseBody
		public Bill retrieveBill(@PathVariable("bill-id") String billId) {
		return ib.retrieveBill(billId);
		}

		// http://localhost:8085/SpringMVC/servlet/add-bill
		@PostMapping("/add-bill")
		public Bill addBill(@RequestBody Bill b) {
	
				
		Bill bi=ib.addBill(b);
		return bi;
		
		
		}
		// http://localhost:8085/SpringMVC/servlet/remove-bill/{bill-id}
		@DeleteMapping("/remove-bill/{bill-id}")
		@ResponseBody
		public void removeBill(@PathVariable("bill-id") String userId) {
		ib.deleteBill(userId);
		}

		
		//http://localhost:8081/SpringMVC/servlet/find/manuelle
		// http://localhost:8081/SpringMVC/servlet/find/{type}
		@GetMapping("/find/{type}")
		@ResponseBody
		public List<Bill> retrieveBillsByTypeJPQL(@PathVariable("type") String type ){
			return ib.retrieveBillsByTypeJPQL(type);
		
			
		}
		
	    // URL : http://localhost:8081/SpringMVC/servlet/affecterCommande_A_Facture/{idf}/{idc}
		   @PutMapping(value = "affecterCommande_A_Facture/{idf}/{idc}")
		  
			public Bill affecterCommande_A_Facture(@PathVariable("idf")long id_facture,@PathVariable("idc")long id_commande){
			 return  ib.affecterCommande_A_Facture(id_facture, id_commande);
		   }
			
		
		 
}

	
	

