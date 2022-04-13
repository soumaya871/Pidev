package tn.esprit.spring.Controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.Bill;
import tn.esprit.spring.entity.Order;

import tn.esprit.spring.repository.BillsRepository;
import tn.esprit.spring.repository.OrderRepository;
import tn.esprit.spring.service.ExportPdf;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class PdfController {


	@Autowired
BillsRepository billsRepository;
@Autowired
OrderRepository orderRepository;
	@GetMapping("/welcome")
	public String list() {

		return "welcome";
	}


	@GetMapping(value = "/exportpdf/{id_order}", produces = MediaType.APPLICATION_PDF_VALUE)
	public ResponseEntity<InputStreamResource> billReports(HttpServletResponse response , @PathVariable ("id_order") long idOrder) throws IOException {
		Order order = orderRepository.findById(idOrder).orElse(null);
	
		//List<Employee> allEmployees = employeeRepository.findAll();
		ByteArrayInputStream bis = ExportPdf.billsReport(order);
		//ByteArrayInputStream bis = ExportPdf.employeesReport(allEmployees);

		HttpHeaders headers = new HttpHeaders();

		headers.add("Content-Disposition", "attachment;filename=bill.pdf");

		return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
				.body(new InputStreamResource(bis));
	}

}
