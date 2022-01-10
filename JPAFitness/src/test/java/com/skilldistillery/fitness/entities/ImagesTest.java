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

class ImagesTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Images image;

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
	    image = em.find(Images.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		image = null;
	    em.close();
	}
	
	@Test
	@DisplayName("Testing user mapping")
	void test() {
		assertNotNull(image);
		assertEquals("Test image", image.getTitle());
		assertEquals("Test Image Description", image.getDescription());
		assertEquals(1, image.getId());
		
	}

}
