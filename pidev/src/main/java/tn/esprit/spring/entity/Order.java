package tn.esprit.spring.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.Set;
import java.util.stream.Stream;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;




@Entity
@Table(name="T_ORDERS")
public class Order implements Serializable{

	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="order_id")
	private long id;
	@Temporal (TemporalType.DATE)
	private Date date ;
	private String Adress;

	
	
	private float montant;
	
	private String status;
	
	private String typedePayment;
	
	private double remise;
	
	private double pourcentageDeRemise;

	@OneToMany(mappedBy="order")
	Set<lignedecommande> lignedecommandes ;
	//@ManyToMany(cascade = CascadeType.ALL)
	//@JoinColumn(name="id")
	

	
	@ManyToOne
	Client client ;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public float getMontant() {
		return montant;
	}
	public void setMontant(float montant) {
		this.montant = montant;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String string) {
		this.status = string;
	}
	public String getTypedePayment() {
		return typedePayment;
	}
	public void setTypedePayment(String typedePayment) {
		this.typedePayment = typedePayment;
	}
	public double getRemise() {
		return remise;
	}
	public void setRemise(double d) {
		this.remise = d;
	}
	public double getPourcentageDeRemise() {
		return pourcentageDeRemise;
	}
	public void setPourcentageDeRemise(double pourcentageDeRemise) {
		this.pourcentageDeRemise = pourcentageDeRemise;
	}
	public Set<lignedecommande> getLignedecommandes() {
		return lignedecommandes;
	}
	public void setLignedecommandes(Set<lignedecommande> lignedecommandes) {
		this.lignedecommandes = lignedecommandes;
	}
	/*public Delivery getDelivery() {
		return delivery;
	}
	public void setDelivery(Delivery delivery) {
		this.delivery = delivery;*/
	
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}

	
	
	

	public String getAdress() {
		return Adress;
	}
	public void setAdress(String adress) {
		Adress = adress;
	}
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Order(int id, Date date, float montant, String status, String typedePayment, double remise,
			double pourcentageDeRemise, Set<lignedecommande> lignedecommandes, Client client) {
		super();
		this.id = id;
		this.date = date;
		this.montant = montant;
		this.status = status;
		this.typedePayment = typedePayment;
		this.remise = remise;
		this.pourcentageDeRemise = pourcentageDeRemise;
		this.lignedecommandes = lignedecommandes;
		
		this.client = client;
	}
	
	
	
}
