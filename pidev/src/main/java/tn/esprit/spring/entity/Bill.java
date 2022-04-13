package tn.esprit.spring.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="T_BILLS")
public class Bill implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="id_number")
	private Long id;
	@Temporal (TemporalType.DATE)
	private Date date;
	private String type ;
	@Column (name="firstName")
	private String firstName;
	@Column (name="lasttName")
	private String lastName;
	@Column (name="PrixUnitaire")
	private String prixuni;
	@Column (name="PrixTva")
	private String prixtva;
	@Column (name="Prixtotale")
	private String prixtot;
@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="id")
	DeliveryAgent deliveryagent;
	@OneToOne
	Order order;
	public Long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = (long) id;
	}
	
	public Bill(Date date) {
		super();
		this.date = date;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPrixuni() {
		return prixuni;
	}
	public void setPrixuni(String prixuni) {
		this.prixuni = prixuni;
	}
	public String getPrixtva() {
		return prixtva;
	}
	public void setPrixtva(String prixtva) {
		this.prixtva = prixtva;
	}
	public String getPrixtot() {
		return prixtot;
	}
	public void setPrixtot(String prixtot) {
		this.prixtot = prixtot;
	}
	

	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public DeliveryAgent getDeliveryagent() {
		return deliveryagent;
	}
	public void setDeliveryagent(DeliveryAgent deliveryagent) {
		this.deliveryagent = deliveryagent;
	}
	public Bill(Long id, Date billDate, String firstName, String lastName, String description, String quantité,
			String prixuni, String prixtva, String prixtot) {
		super();
		this.id = id;
		this.date= date;
		this.firstName = firstName;
		this.lastName = lastName;
		
		this.prixuni = prixuni;
		this.prixtva = prixtva;
		this.prixtot = prixtot;
		
	}

	public Bill(String type) {
		super();
		this.type = type;
	}
	
public void setBillDate(LocalDate now) {
		// TODO Auto-generated method stub
		
	}
public Bill(Order order) {
	super();
	this.order = order;
}
public void setOrder(Order o) {
	// TODO Auto-generated method stub
	
}
public Bill() {
	super();
	// TODO Auto-generated constructor stub
}

	

}
