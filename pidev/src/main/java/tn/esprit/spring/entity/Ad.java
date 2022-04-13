package tn.esprit.spring.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
@Entity
@Table(name="T_AD")
public class Ad implements Serializable {


	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy= GenerationType.IDENTITY)
	@Column(name="ad_id")
	private int id;
	private String title ;
	private String channel ; 
	@Temporal (TemporalType.DATE)
	private Date startDate;
	@Temporal (TemporalType.DATE)
	private Date endDate;
	private int nbInitTarget;
	private int nbFinalReached;
	private int adCost;
	@Enumerated (EnumType.STRING)
	adType type ;
	
	@ManyToOne
	Seller seller;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getChannel() {
		return channel;
	}
	public void setChannel(String channel) {
		this.channel = channel;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public int getNbInitTarget() {
		return nbInitTarget;
	}
	public void setNbInitTarget(int nbInitTarget) {
		this.nbInitTarget = nbInitTarget;
	}
	public int getNbFinalReached() {
		return nbFinalReached;
	}
	public void setNbFinalReached(int nbFinalReached) {
		this.nbFinalReached = nbFinalReached;
	}
	public int getAdCost() {
		return adCost;
	}
	public void setAdCost(int adCost) {
		this.adCost = adCost;
	}
	public adType getType() {
		return type;
	}
	public void setType(adType type) {
		this.type = type;
	} 
	
}
