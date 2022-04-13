package tn.esprit.spring.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="T_CLIENTS")
public class Client implements Serializable{

	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="client_id")
	private Long id;
	private String firstName; 
	private String lastName;
	private String adress;
	private int phoneNumber;
	
	
	@ManyToMany(cascade = CascadeType.ALL)
	private Set<Donnation> donnation;
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy="client")
	private Set<Order> order;
	@OneToMany(cascade = CascadeType.ALL, mappedBy="client")
	private Set<Complaint> complaint;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="client")
	private Set<Publication> publication;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public int getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Client(Long id, String firstName, String lastName, String adress, int phoneNumber, Set<Donnation> donnation,
			Set<Order> order, Set<Complaint> complaint, Set<Publication> publication) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.adress = adress;
		this.phoneNumber = phoneNumber;
		this.donnation = donnation;
		this.order = order;
		this.complaint = complaint;
		this.publication = publication;
	}
	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
