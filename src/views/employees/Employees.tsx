import React, { useState, useEffect } from 'react';
import { Input } from '../../components';

interface Employee {
    id: string
    name: string
    last_name: string
    birthday: number
}

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [employeeNameQuery, setEmployeeNameQuery] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/examen/employees/eriklara`, {
            method: 'GET',
            })
            .then((response) => response.json())
            .then((data) => {
                setEmployees(data.data.employees);
                setFilteredEmployees(data.data.employees);
            })
            .catch((error) => {
                console.log('Cannot get data');
            });
    }, [])
    
    const searchEmployee = (value: string | number, _id: string) => {
        setEmployeeNameQuery(String(value));
        setFilteredEmployees(employees.filter((employee: any) => employee.name.includes(String(value))));
    };

    return (
        <div className="employees">
            <Input
                type="text"
                title="Search employee"
                value={employeeNameQuery}
                onChange={searchEmployee}
            />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Birthday</th>
                </tr>
                {
                    filteredEmployees.map((emp: any) => (
                        <tr>
                            <td>{emp.name}</td>
                            <td>{emp.last_name}</td>
                            <td>{String(new Date(emp.birthday))}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default Employees;
