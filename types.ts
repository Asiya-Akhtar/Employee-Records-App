
export enum EmployeeStatus {
  ACTIVE = 'active',
  ON_LEAVE = 'on_leave',
  TERMINATED = 'terminated',
}

export interface Department {
  id: string;
  name: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  jobTitle: string;
  salary: number;
  hireDate: Date;
  status: EmployeeStatus;
  departmentId: string;
  department?: Department;
  createdAt: Date;
  updatedAt: Date;
}

export type EmployeeWithDepartment = Employee & {
  department: Department;
};

export type NewEmployee = Omit<Employee, 'id' | 'createdAt' | 'updatedAt' | 'department'>;
export type NewDepartment = Omit<Department, 'id' | 'createdAt' | 'updatedAt'>;

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

export interface ToastMessage {
  id: number;
  type: ToastType;
  message: string;
}
