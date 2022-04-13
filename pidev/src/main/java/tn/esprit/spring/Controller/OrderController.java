package tn.esprit.spring.Controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.primefaces.validate.bean.ClientConstraint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.Client;
import tn.esprit.spring.entity.Order;

import tn.esprit.spring.entity.lignedecommande;
import tn.esprit.spring.repository.ClientRepository;
import tn.esprit.spring.repository.OrderRepository;
import tn.esprit.spring.repository.ligneCommandeRepository;
import tn.esprit.spring.service.IOrderService;

import tn.esprit.spring.service.OrderServiceImpl;


import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class OrderController {
	@Autowired 
	IOrderService orderService;
	@Autowired
	ClientRepository client;
	
	
	/*@Autowired
	OrderRepository orderRepository;*/
public void sendSms(String to,String from, String body) {
	try {Twilio.init("AC974e72b8738887dc6c569a2cb73ec8eb", "b29e8ace7cb4760ca804879cf60fd38b");
	Message message=
			Message.creator(new PhoneNumber(to), new PhoneNumber(from), body).create();
	
	}catch (Exception e) {
		e.printStackTrace();
	}
}
	
	//affichage all order 
	//http://localhost:8081/SpringMVC/servlet/afficher
	@GetMapping("/afficher")
	public List<Order> getAllCommande() {
		return orderService.getallOrder();
	}

/*	/*{"date":"2021-03-02" ,
   "adress":"ariana",
   "montant": 23.25,
   "status":"true",
   "typedePayment":"doortoodoor",
   "remise":"non",
   "pourcentageDeRemise":0.0
   }*/
	////http://localhost:8081/SpringMVC/servlet/ajouter
	@PostMapping("/ajouter")
	public Order AjouterCommande(@Valid @RequestBody Order c) {
		return orderService.ajoutercommande(c);
	}

	//http://localhost:8081/SpringMVC/servlet/pt_merci/{idCommande}
	//affichage les points merci 
	@GetMapping("pt_merci/{idCommande}")
	@ResponseBody
	public long pt_merci(@PathVariable(value ="idCommande")int idCommande){
		
		return orderService.pt_merci(idCommande);
		
		 
		//		sendSms(s, "+14156493639","our points fidelity");
				
		
	}
	/*//http://localhost:8081/SpringMVC/servlet/pt_merci/{idCommande}
		//affichage les points merci 
		@GetMapping("pt_merci/{idCommande}")
		@ResponseBody
		public Long pt_merci(@PathVariable(value ="idCommande")int idCommande){
			
		Long o=	 orderService.pt_merci(idCommande);
			 sendSms( "+21695592018", "+14156493639","our points fidelity");
			return o;
		}
			 
			//		sendSms(s, "+14156493639","our points fidelity");
					
			*/
		
	//http://localhost:8081/SpringMVC/servlet/recherche/idorder
		@GetMapping("recherche/{idOrder}")
		@ResponseBody
		public Order rechercheCommParId(@PathVariable(value="idOrder") int id )
		{
			return orderService.getOrderById(id);
		}


	
	// affichage methode ajout au pnaier 
	//http://localhost:8081/SpringMVC/servlet/ajout/{idProduit}/{idClient}
	@PostMapping("/ajout/{idProduit}/{idClient}")
	@ResponseBody
	public Order ajouterProduitAuPanier(@PathVariable(value = "idProduit") long idProduit,@PathVariable(value = "idClient")long idClient)
	{
		return orderService.ajouterAuPanier(idProduit, idClient);
	}
	
	
	//http://localhost:8081/SpringMVC/servlet/recherchestatus/?status=true
	@PutMapping("/recherchestatus")
	public List<Order> CommandeparStatus(@RequestParam  String status) {
		return orderService.CommandeparStatus(status);
	}

	//http://localhost:8081/SpringMVC/servlet/remise/{idCommande}
 @PostMapping("/remise/{idcommande}")
 @ResponseBody
 public void Remise(@PathVariable  long idcommande) {
	 orderService.remise(idcommande);
 }
 
	//http://localhost:8081/commandeParMois
	@GetMapping("/commandeParMois")
	@ResponseBody
	public  List<Object[]> NumCommadeParMOIS()
	{
		return orderService.NumCommadeParMOIS();
	}
	/////gener factureb auto
	
	@PostMapping("/confirmer/{idCommande}")
	public Order confirmer_commande(@PathVariable(value ="idCommande")int idCommande){
	return 	orderService.confirmer_commande(idCommande);
		
	}
	//////
	@PutMapping("/payerenligne/{idCommande}")
	public void PayerEnLigne(@PathVariable(value = "idCommande") int idCommande) {
		orderService.PayerEnLigne(idCommande);
	}


	
	//http://localhost:8081/delete/{id}
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<Order> DeleteCommande(@PathVariable(value = "id") Long idCommande) {
			Order o =orderService.getOrderById(idCommande);
			if ( o == null) {
				return ResponseEntity.notFound().build();
			}
		orderService.Delete(o);
			return ResponseEntity.ok().build();
		}
		
		@GetMapping("/TopProducts")
		@ResponseBody
		public List<Object[]>TopProduct() {
			return orderService.Top3Product();
			
		}
		
	
		//http://localhost:8081/SpringMVC/servlet/Commandeclient/?id=4
		@PutMapping("/Commandeclient")
		public List<Order>CommandeparClient(@RequestParam Long id) {
			return orderService. CommandeparClient(id);
		}
	
	/*	@GetMapping("desc/{idligne}")
		@ResponseBody
		public void descrementation(@PathVariable (value="idligne") Long idligne) {
			orderService.descrementation(idligne);
*/

}
















