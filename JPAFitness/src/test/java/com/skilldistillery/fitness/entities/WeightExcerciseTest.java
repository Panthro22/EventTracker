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

class WeightExcerciseTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private WeightExcercise weightExcercise;

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
	    weightExcercise = em.find(WeightExcercise.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		weightExcercise = null;
	    em.close();
	}
	
	@Test
	@DisplayName("Testing user mapping")
	void test() {
		assertNotNull(weightExcercise);
		assertEquals("bench", weightExcercise.getName());
		assertEquals(1, weightExcercise.getId());
		
	}
}
