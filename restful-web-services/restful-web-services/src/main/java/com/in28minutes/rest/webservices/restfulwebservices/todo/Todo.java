package com.in28minutes.rest.webservices.restfulwebservices.todo;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {
	
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String Professor;
	private String Designation;
	private String Specialization;
	//private Date DOJ;
	private Integer Salary;
	private String IName;
	private Integer Marks;
	private Integer Attendance;
	private String SName;
	private String subject;
	//private boolean isDone;
	//private String usernamei;
	//private Long idi;
	//private String splzni;
	
	
	
	protected Todo() {
		
	}
	public Todo(long id, String username,String Professor,String Designation,String Specialization,Integer Salary,String IName,Integer Marks,Integer Attendance,String SName,String subject){
		super();
		this.id = id;
		this.username = username;
		this.Professor=Professor;
		this.Designation=Designation;
		this.Specialization = Specialization;
		//this.DOJ = DOJ;
		this.Salary=Salary;
		this.IName=IName;
		this.Marks=Marks;
		this.Attendance=Attendance;
		this.subject=subject;
		//this.idi=idi;
		//this.splzni=splzni;
	}
	
	/*public String getSplzni() {
		return splzni;
	}
	public void setSplzni(String splzni) {
		this.splzni = splzni;
	}*/
	
	
	public Integer getSalary() {
		return Salary;
	}
	public void setSalary(Integer Salary) {
		this.Salary = Salary;
	}
	public long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getProfessor() {
		return Professor;
	}
	
	public void setProfessor(String Professor) {
		this.Professor = Professor;
	}
	
	public String getDesignation() {
		return Designation;
	}
	
	public void setDesignation(String Designation) {
		this.Designation = Designation;
	}
	
	public String getSpecialization() {
		return Specialization;
	}

	public void setSpecialization(String Specialization) {
		this.Specialization = Specialization;
	}

	public String getIName() {
		return IName;
	}
	
	public void setIName(String IName) {
		this.IName = IName;
	}
	public Integer getMarks() {
		return Marks;
	}
	public void setMarks(Integer Marks) {
		this.Marks = Marks;
	}
	public Integer getAttendance() {
		return Attendance;
	}
	public void setAtendance(Integer Attendance) {
		this.Attendance = Attendance;
	}
	
	public String getSName() {
		return SName;
	}
	public void setSName(String SName) {
		this.SName = SName;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	/*public Date getDOJ() {
		return DOJ;
	}

	public void setDOJ(Date DOJ) {
		this.DOJ = DOJ;
	}*/
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int)(id ^(id >>> 32)) ;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (id != other.id) 
			return false;
		return true;
	}

}
	
