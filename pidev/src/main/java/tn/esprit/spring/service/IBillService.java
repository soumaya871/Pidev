package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.entity.Bill;
import tn.esprit.spring.entity.Order;

public interface IBillService {

	
	Bill retrieveBill(String billId);
	Bill addBill(Bill b);
	void deleteBill(String userId);
	List<Bill> retrieveBillsByTypeJPQL(String T);
	Bill affecterCommande_A_Facture(long id_facture, long id_commande);
	//public List<Bill> getAllfactures_by_Commande(int cmd);
	List<Bill> retrieveAllBills();
	public Bill save(Bill b);

}
