package tn.esprit.spring.service;

import java.util.List;
import java.util.Map;

import tn.esprit.spring.entity.Bill;
import tn.esprit.spring.entity.Order;
import tn.esprit.spring.entity.lignedecommande;

public interface IOrderService {

	public Order  ajoutercommande(Order commande);// cbon 5edmtha
	public List<Order> getallOrder(); //statu : loading  // cbon 5edmtha 
	public long pt_merci(long idCommande);//5edmltha
	
	
	public Order ajouterAuPanier(long idprod, long idClient );// cbon 5edmtha
	public Order getOrderById(long id);// cbon 5edmtha 
	//public List<Order> getallBills();//statu : c bon 

	public List<Order> CommandeparStatus(String status);
	 public List<Order> CommandeparClient(long id);

void remise(long idcommande);
	public  List<Object[]> NumCommadeParMOIS();
	public Order confirmer_commande(long idCommande);
	public void Delete(Order o);
	 void PayerEnLigne(int idCommande);
	 public List<Object[]> Top3Product();
	
		

	 void descrementation(long idligne);
	




}
