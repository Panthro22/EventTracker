package com.skilldistillery.fitness.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class DailyLogEntriesTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private DailyLogEntries dle;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	    emf = Persistence.createEntityManagerFactory("JPAFitness");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	    emf.close();
	}


	@BeforeEach
	void setUp() throws Exception {
	    em = emf.createEntityManager();
	    dle = em.find(DailyLogEntries.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		dle = null;
	    em.close();
	}
	
	@Test
	@DisplayName("Testing user mapping")
	void test() {
		assertNotNull(dle);
		assertEquals(2022, dle.getDate().getYear());
		assertEquals(1, dle.getDate().getMonthValue());
		assertEquals(9, dle.getDate().getDayOfMonth());
		assertEquals("Jordon", dle.getUser().getFirstName());
		assertEquals("Paynter", dle.getUser().getLastName());
		
	}

}
