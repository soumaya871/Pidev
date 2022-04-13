package tn.esprit.spring.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="T_PAYMENTS")
public class Payment implements Serializable{

	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="paiment_id")
	private int id;
	@Enumerated (EnumType.STRING)
	paymentType Type;
	
	
	@OneToOne
	@JoinColumn (name="id" , nullable = false)
	private Order order;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public paymentType getType() {
		return Type;
	}
	public void setType(paymentType type) {
		Type = type;
	}
}
