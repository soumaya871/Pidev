package tn.esprit.spring.service;


import static org.hamcrest.CoreMatchers.nullValue;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import tn.esprit.spring.entity.Bill;
import tn.esprit.spring.entity.Client;
import tn.esprit.spring.entity.Order;
import tn.esprit.spring.entity.Product;

import tn.esprit.spring.entity.lignedecommande;
import tn.esprit.spring.repository.BillsRepository;
import tn.esprit.spring.repository.ClientRepository;
import tn.esprit.spring.repository.OrderRepository;
import tn.esprit.spring.repository.ProductRepository;
import tn.esprit.spring.repository.ligneCommandeRepository;
@Service
public class OrderServiceImpl implements IOrderService  {

	@Autowired
	OrderRepository orderRepository;
	@Autowired
	ClientRepository clientRepository;
	@Autowired
	ligneCommandeRepository ligneCommandeRepository;
	@Autowired 
	ProductRepository productRepository;
	@Autowired
	BillServiceImpl BillServiceImpl;

	@Transactional
	@Override
	public Order ajouterAuPanier(long idProd , long idClient) {
		Client client =clientRepository.findById(idClient).orElse(null);
	Order order = orderRepository.CommandeencoursparClient(idClient);
		lignedecommande l=ligneCommandeRepository.getOne(idProd);
		// Order order = orderRepository.findAll().stream().filter(e->e.getClient().getId()==idClient).findFirst().orElse(null);

		if(order!=null) {
			boolean trouve =false;
			for (lignedecommande ligne :order.getLignedecommandes()) {
				if(ligne.getProduct().getId()==idProd ) {
					incrementation(ligne.getId());
					trouve=true;
					//ligneCommandeRepository.save(ligne);
					float total =(float) (ligne.getProduct().getProduct_price()*ligne.getQuantity());
					order.setMontant(total);
					ligneCommandeRepository.save(ligne);
					//orderRepository.save(order);
					
				}
			}
			if(trouve==false) {
				lignedecommande newligne = new lignedecommande();
				Product product=productRepository.findById(Integer.valueOf((String.valueOf(idProd)))).orElse(null);
				newligne.setProduct(product);
				newligne.setQuantity(1);
				newligne.setOrder(order);
				float total =(float) (newligne.getProduct().getProduct_price()*newligne.getQuantity());
				order.setMontant(total);
				ligneCommandeRepository.save(newligne);
				
			}
		}
		else {
			//	if(order ==null) {
			Client cl =clientRepository.findById(idClient).orElse(null);
			float total=0;
			Order neworder =new Order();
			neworder.setClient(client);
			neworder.setDate(new Date());
			neworder.setStatus("En cours");
			neworder.setTypedePayment("En cours");
			neworder.setAdress(cl.getAdress());
			order=orderRepository.save(neworder);
			lignedecommande newligne = new lignedecommande();
			Product product=productRepository.findById(Integer.valueOf((String.valueOf(idProd)))).orElse(null);
			newligne.setProduct(product);
			newligne.setQuantity(1);
				newligne.setOrder(order);
			newligne.setPrice(product.getProduct_price());
		    //neworder.setMontant(total);
			ligneCommandeRepository.save(newligne);
			
			total =(float) (newligne.getProduct().getProduct_price()*newligne.getQuantity());
			order.setMontant(total);

				//orderRepository.save(order);
		}
		





		return orderRepository.save(order);
	}	
	/////////////////////////////////////////////////////
	public Order confirmer_commande(long idCommande) {

		Order c=orderRepository.getOne((long) idCommande);
		//Client client = clientRepository.getOne(iduser);
		c.setStatus("payee");
		
	
		return orderRepository.save(c);
		

	}
	//////////////////////////////////////////////////////

	public void remise(long idcommande){
		Order c = orderRepository.CommandeencoursparClient(idcommande);
     //	lignedecommande ligne =ligneCommandeRepository.getOne(idcommande);
		//float a=	(float) (ligne.getPrice()*ligne.getQuantity());
		Client client = clientRepository.getOne(idcommande);
float a =c.getMontant();
		if (a >= 50 && a <= 300) {
			//c.setMontant(a);
			c.setPourcentageDeRemise(10);
			c.setRemise (a - a * 0.1);
			orderRepository.save(c);

		}
		else if (a >= 500 && a <= 999) {
			//c.setMontant(a);
			c.setPourcentageDeRemise(15 );
			c.setRemise(a - a * 0.15);
			orderRepository.save(c);
		}
		else{
			c.setMontant(a);
			c.setPourcentageDeRemise(0);
			c.setRemise(a);
			orderRepository.save(c);
		}}

	/////////////////////////////////////////////////////////////////

	@Override
	public List<Object[]> NumCommadeParMOIS()
	{

		return orderRepository.NumCommadeParMOIS();
	}

	////////////////////////////
	@Override
	public Order  getOrderById(long id) {
		return orderRepository.findById(id).orElse(null);
	}

	@Override
	public List<Order> getallOrder() {
		return (List<Order>) orderRepository.findAll();
	}
	@Override
	public Order ajoutercommande(Order commande) {
		commande.setDate(new Date());
		return orderRepository.save(commande);

	}
	public void Delete(Order o) {
		orderRepository.delete(o);
	}


	public Order CommandeencoursparClient(long id)
	{
		return orderRepository.CommandeencoursparClient(id);
	}

	//////////////////////////////////////////////////
	@Override
	public long pt_merci(long idCommande){
		Order order=orderRepository.getOne(idCommande);
		double a=order.getMontant();
		long points = Math.round(a / 10);
		return points;
	}
///////////////////////////////////
	@Override
	public List<Order>  CommandeparClient(long id) {
		return orderRepository.CommandeparClient(id);
	}

	@Override
	public List<Order> CommandeparStatus(String status) {
		return orderRepository.CommandeparStatus(status);
	}

	///////////////////////////////////

			 	
	

	public void incrementation (long idcommande) {
		lignedecommande ligne	= ligneCommandeRepository.findById(idcommande).orElse(null);
		int oldquantity=ligne.getQuantity();
		ligne.setQuantity(oldquantity+1);

	}
	@Override
	public void descrementation(long idligne) {
		lignedecommande ligne	= ligneCommandeRepository.findById(idligne).orElse(null);
		  
		int oldquantity=ligne.getQuantity();
	ligne.setQuantity(oldquantity-1);
		//ligne.setQuantity(ligne.getQuantity()-1);
	

	}
	@Override
	public void PayerEnLigne(int idCommande) {
		Order order = orderRepository.getOne((long) idCommande);
	//	Client client =clientRepository.findById((long)idClient).get();
		 
			orderRepository.PayerEnLigne(idCommande);
			
	
	
	}
	@Override
	public List<Object[]> Top3Product() {
		// TODO Auto-generated method stub
		return orderRepository.Top3Product();
	}
	

	}
		








