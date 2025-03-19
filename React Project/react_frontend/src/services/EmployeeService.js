import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/api/v1/employees";

class EmployeeService {
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee, {
      headers: {
        'Content-Type': 'application/json',  // Ensure JSON content type is set
      },
    });
  }

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
  }
}

// Assign the instance of the class to a variable
const employeeService = new EmployeeService();

// Export the instance
export default employeeService;
