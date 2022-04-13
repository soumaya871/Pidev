package tn.esprit.spring;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.logging.log4j.LogManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import tn.esprit.spring.entity.Bill;
import tn.esprit.spring.service.BillServiceImpl;
import tn.esprit.spring.service.IBillService;
@RunWith(SpringRunner.class)
@SpringBootTest
public class BillTest {

	public BillTest() {
		// TODO Auto-generated constructor stub
	}
@Autowired
IBillService ib ; 
private static final org.apache.logging.log4j.Logger l= LogManager.getLogger(BillServiceImpl.class);
/*@Test
public  void testAddBill() throws ParseException {
	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	Date date = dateFormat.parse("2015-01-23");
	Bill b = new Bill(21,date ,"manuelle","sousou","zac","sac rouge","1","15.0","19","40",true);
	
ib.addBill(b)	; 
}	*/
@Test
public void testRetrieveBillsByTypeJPQL() {
	String T = "Manuelle";
	ib.retrieveAllBills();
}
}
