package tn.esprit.spring.service;

import java.awt.Font;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;


import org.apache.logging.log4j.LogManager;
import org.dom4j.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Bill;
import tn.esprit.spring.entity.Order;
import tn.esprit.spring.entity.Product;
import tn.esprit.spring.repository.BillsRepository;
import tn.esprit.spring.repository.OrderRepository;
import tn.esprit.spring.repository.ProductRepository;
import tn.esprit.spring.repository.ligneCommandeRepository;

@Service
public class BillServiceImpl implements IBillService {

	public BillServiceImpl() {
		// TODO Auto-generated constructor stub
	}
	@Autowired
	BillsRepository billsRepository;
	@Autowired 
	OrderRepository orderRepository;
	@Autowired
	ProductRepository productRepository;

	private static final org.apache.logging.log4j.Logger l= LogManager.getLogger(BillServiceImpl.class);
	@Override
	public Bill addBill(Bill b) {
	return	billsRepository.save(b);
		
	}
	@Override
	public void deleteBill(String id) {
		// TODO Auto-generated method stub
		billsRepository.deleteById(Long.parseLong(id));	
	}
	@Override
	public Bill retrieveBill(String id) {
		// TODO Auto-generated method stub
		Bill b = billsRepository.findById(Long.parseLong(id)).orElse(null);
		l.info("Bill returned : "+b);	
		return b;
	}




	@Override
	public List<Bill> retrieveBillsByTypeJPQL( String type ) {
		// TODO Auto-generated method stub
		List<Bill> bills =(List<Bill>) billsRepository.retrieveBillsByTypeJPQL(type);
		return bills;
	}
	/*@Override
	public void affecterCommande_A_Facture(long id_facture, long id_commande) {
		Order o =orderRepository.getOne(id_commande);
		
		Bill b =billsRepository.getOne(id_facture);
			//factureRepository.affecterCommande_A_Facture(id_commande, id_facture);
		b.setPrixtot(String.valueOf(o.getMontant()));
		b.setFirstName(o.getClient().getFirstName());
		b.setLastName(o.getClient().getLastName());
	b.setType("automatique");
	b.setOrder(o);
		b=billsRepository.save(b);
		}*/
	
	@Override
	public Bill affecterCommande_A_Facture(long id_facture, long id_commande) {
		Order o =orderRepository.getOne(id_commande);
		
		Bill b =billsRepository.getOne(id_facture);
			//factureRepository.affecterCommande_A_Facture(id_commande, id_facture);
		b.setPrixtot(String.valueOf(o.getMontant()));
		b.setFirstName(o.getClient().getFirstName());
		b.setLastName(o.getClient().getLastName());
	b.setType("automatique");
  // b.setOrder(String.valueOf(o.getAdress()));
	b.setOrder(o);
		b=billsRepository.save(b);
		return b;
		}
	
	
	/*@Override
	public List<Order> retrieve() {
		// TODO Auto-generated method stub
		return null;
	}
	*/


	public List<Bill> retrieveAllBills() {
		// TODO Auto-generated method stub
		return (List<Bill>) billsRepository.findAll();
		
	}
	@Override
	public Bill save(Bill b) {
		// TODO Auto-generated method stub
		return null;
	}
	
		





}